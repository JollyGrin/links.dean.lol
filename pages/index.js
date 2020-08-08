import React, { Component } from 'react';
import { getData } from '../lib/gson';
import { parseLink, parseCategories, makeTable } from '../lib/parse';
import CategoryTable from '../lib/CategoryTable';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Panes from '../components/Panes';
import Footer from '../components/Footer';

export default function Index({ sheetData, preview }) {
  const sheetObject = parseLink(sheetData);
  const categories = parseCategories(sheetObject);
  const newTable = makeTable(categories, sheetObject);

  return (
    <Layout>
      <Header />
      <Panes table={newTable} />
      <Footer />
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const sheetsURL = process.env.URL;
  const sheetData = await getData(sheetsURL);

  return {
    props: { sheetData },
  };
}
