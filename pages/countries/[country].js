import React from 'react';
import PropTypes from 'prop-types';
import { PageHeader, Card, List, Statistic } from 'antd';
import { useRouter } from 'next/router';
import Link from 'next/link';

const getCountry = async id => {
  const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${id}`);
  const country = await res.json();
  return country;
};

function Country({ country, borders }) {
  const router = useRouter();
  const data = [
    { title: 'Capital', value: country.capital },
    {
      title: 'Lenguajes',
      value: country.languages.map(element => element.nativeName).join(', '),
    },
    {
      title: 'Moneda',
      value: country.currencies.map(element => element.name).join(', '),
    },
    { title: 'Native name', value: country.nativeName },
    { title: 'Gini', value: country.gini },
  ];

  const back = () => router.back();

  return (
    <div>
      {/* Logo */}
      <div className="mb-2">
        <PageHeader title={country.name} onBack={back} />
      </div>
      {/* Country's info */}
      <div className="inline space-y-7 lg:flex lg:items-start lg:justify-center lg:space-x-4 lg:space-y-0">
        <div className="px-4 lg:px-0">
          <Card title="Continente" extra={country.region} className="shadow-xl">
            <div className="flex-1 mb-5">
              <img
                src={country.flag}
                alt={country.name}
                width="300"
                className="rounded-2xl"
              />
            </div>
            <div className="inline lg:flex lg:justify-between">
              <Statistic title="Población" value={country.population} />
              <Statistic title="Área" value={country.area} />
            </div>
          </Card>
        </div>
        <div className="px-4 lg:px-0">
          <Card title="Detalles" className="shadow-xl">
            <List
              bordered
              dataSource={data}
              renderItem={item => (
                <List.Item className="justify-between lg:space-x-32">
                  <p className="font-semibold">{item.title}</p>
                  <p className="font-mono">{item.value}</p>
                </List.Item>
              )}
            />
          </Card>
        </div>
      </div>
      {/* Near countries */}
      <div className="flex justify-center mt-7 px-4 lg:px-0">
        <Card title="Países cercanos" className="shadow-xl">
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
            {borders.map(border => (
              <Link
                key={border.alpha3Code}
                href={`/countries/${border.alpha3Code}`}
              >
                <a>
                  <img
                    src={border.flag}
                    alt={border.name}
                    width="150"
                    className="rounded-2xl"
                  />
                  <p className="text-center font-medium">{border.name}</p>
                </a>
              </Link>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

Country.propTypes = {
  country: PropTypes.object,
  borders: PropTypes.array,
};

Country.defaultProps = {
  country: {},
  borders: [],
};

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(
    `https://restcountries.eu/rest/v2/alpha/${params.country}`
  );
  const country = await res.json();
  if (country.status >= 400) return { notFound: true };
  const borders = await Promise.all(
    country.borders.map(border => getCountry(border))
  );
  return { props: { country, borders } };
};

export default Country;
