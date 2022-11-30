import {
    getStoreData,
    getStoresData,
} from '../adapters/supabaseadapter.js';

export async function getStore(req, res) {
    const rows = await getStoreData(req.params.id);
    if (rows.length > 0) {
      const response = {};
      response.meta = {
        title: 'individual store',
        url: `${req.originalUrl}`
      }
      response.data = rows[0];
      res.json(response);
    } else {
      res.status(500).json({ message: 'i cannot find the store' });
    }
}

export async function getStores(req, res) {
    const stores = {};
    const rows = await getStoresData();
    if (rows.length > 0) {
      stores.meta = {
        title: 'all stores',
        url: req.originalUrl,
      };
      stores.data = [];
      rows.map((store) => {
        stores.data.push({
          id: store.id,
          state: store.state,
          timeslot: store.timeslot,
          name: store.name,
        });
      });
      res.json(stores);
    } else {
      res.status(500);
      res.json({
        title: 'no stores found',
        message: `🥴 We did something wrong`,
      });
    }
  }