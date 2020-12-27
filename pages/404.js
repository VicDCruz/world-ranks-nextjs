import React from 'react';
import { Result, Button } from 'antd';
import { useRouter } from 'next/router';

function NotFount() {
  const router = useRouter();
  return (
    <Result
      status="404"
      title="404"
      subTitle="Lo sentimos, la página que tratas de encontrar no existe"
      extra={
        <Button type="primary" onClick={() => router.push('/')}>
          Regresar a la página principal
        </Button>
      }
    />
  );
}

export default NotFount;
