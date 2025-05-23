import React from 'react'
import ProductCard from '@/components/properties/Card';
import { getBrands, getProperties } from '@/api/properties';
import PropertyDrawer from '@/components/properties/Drawer';
import PropertyFilters from '@/components/properties/Filters';

export const metadata = {
  title: 'Properties',
};

async function PropertiesPage({searchParams}) {
  const response = await getProperties(await searchParams);
  const brandsResponse = await getBrands();

  const products = response?.data;
  const brands = brandsResponse?.data;
  
  return (
    <section>
      <h1 className='text-3xl font-bold underline pt-6 text-center'>Popular Properties</h1>
      <PropertyFilters brands={brands}/>
    <div className='container grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-8 '>
     {
      products?.map((product, index)=>(
        <ProductCard key={index} product={product}/>
      ))
     }
      </div> 
      </section>
  )
}

export default PropertiesPage;