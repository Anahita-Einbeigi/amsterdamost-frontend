import { createClient } from 'contentful';
import { link } from 'fs';

export const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string,
});

export const fetchEntries = async () => {
  const entries = await client.getEntries({
    content_type: 'place', 
    order: ['fields.date'],
  });
  console.log(entries.items);
  return entries.items.map((item: any) => ({
    id: item.sys.id,
    title: item.fields.title,
    address: item.fields.address,
    date: item.fields.date,
    startdate: item.fields.startdate,
    link: item.fields.link,
    openingHours: item.fields.openingHours,
  }));
};
