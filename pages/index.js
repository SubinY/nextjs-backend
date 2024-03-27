import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import TableComponent from '../components/simpleTable';
import { useState } from 'react';

export default function Home({ allPostsData }) {
  const [tableData, setTableData] = useState([]);

  const handleClick = async () => {
    const resp = await fetch('/api/get-apply-user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const { code, message, data } = await resp.json();
    setTableData(data)
  };
  const handleSubmit = async () => {
    const resp = await fetch('/api/set-apply-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        phone: '15815828124',
        name: 'test'
      })
    });
    const { code, message, data } = await resp.json();
    console.log(code, 'cccccccccc');
  };

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <button onClick={() => handleClick()}>查询</button>
      <button onClick={() => handleSubmit()}>提交</button>
      <TableComponent data={tableData}></TableComponent>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {}
  };
}
