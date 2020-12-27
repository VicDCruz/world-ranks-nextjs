import React from 'react';
import { PageHeader, Input, Statistic, Table } from 'antd';
import { useRouter } from 'next/router';

const { Search } = Input;

function index({ countries }) {
  const router = useRouter();
  const [filteredCountries, setFilteredCountries] = React.useState(countries);

  const search = event => {
    event.preventDefault();
    const keyword = event.target.value;
    setFilteredCountries(
      countries.filter(
        country =>
          country.name.toLowerCase().includes(keyword) ||
          country.region.toLowerCase().includes(keyword) ||
          country.subregion.toLowerCase().includes(keyword)
      )
    );
  };

  const back = () => router.back();

  const columns = [
    {
      title: 'Flag',
      dataIndex: 'flag',
      key: 'flag',
      render: img => (
        <div className="flex">
          <img src={img} alt="Bandera" width={100} />
        </div>
      ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      className: 'font-semibold',
    },
    {
      title: 'Population',
      dataIndex: 'population',
      key: 'population',
      className: 'font-mono',
    },
    {
      title: (
        <div>
          Area km
          <sup>2</sup>
        </div>
      ),
      dataIndex: 'area',
      key: 'area',
      className: 'font-mono',
    },
    {
      title: 'Gini',
      dataIndex: 'gini',
      key: 'gini',
      render: element => (element ? `${element}%` : 'Sin gini'),
      className: 'font-mono',
    },
  ];

  return (
    <div className="lg:m-4">
      <div className="border-solid border-gray-500 lg:border-4 mb-2">
        <PageHeader
          title="World Ranks"
          subTitle="Tabla de los países"
          onBack={back}
          extra={[
            <Statistic
              key="statistic"
              title="Países encontrados"
              value={filteredCountries.length}
            />,
          ]}
        />
      </div>
      <div className="my-2 px-5 lg:px-20 content-center">
        <Search
          key="search"
          placeholder="Filtra por Nombre, Región o SubRegión"
          onChange={search}
          enterButton
        />
      </div>
      <div className="px-4 lg:px-0 border-solid border-gray-200 border-2 rounded-lg">
        <Table
          dataSource={filteredCountries}
          columns={columns}
          rowClassName="hover:shadow-xl"
          rowKey={record => record.name}
          scroll={{ scrollToFirstRowOnChange: true, x: true }}
        />
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch('https://restcountries.eu/rest/v2/all');
  const countries = await res.json();
  return {
    props: { countries },
  };
};

export default index;
