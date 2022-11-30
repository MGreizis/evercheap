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
 * Function to get the data from one appointment
 * 
 * @param {*} id the id form a appointment
 * @returns appointment data
 */
 export async function getStoreData(id) {
    console.log('👀 for id:', id);
    const { data, error } = await supabase.from('stores').select('*').eq('id', id);
    if (error) console.log('query error', error);
    else return data;
  }
  
  /**
   * function to read all the stores
   * @returns an array of stores
   */
  export async function getStoresData() {
    const { data, error } = await supabase.from('stores').select('*');
    if (error) console.log('query error', error);
    else return data;
  }
  