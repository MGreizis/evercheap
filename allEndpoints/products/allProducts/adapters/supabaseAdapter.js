import * as dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: 'variables.env' });

console.log('url', process.env.SUPABASE_URL);

// my supabase client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

/**
 * Function to get the data from one product
 * 
 * @param {*} id the id form a product
 * @returns product data
 */
 export async function getProductData(id) {
    console.log('👀 for id:', id);
    const { data, error } = await supabase.from('products').select('*').eq('id', id);
    if (error) console.log('query error', error);
    else return data;
  }
  
  /**
   * function to read all the products
   * @returns an array of products
   */
  export async function getProductsData() {
    const { data, error } = await supabase.from('products').select('*');
    if (error) console.log('query error', error);
    else return data;
  }
  