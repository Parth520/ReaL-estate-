// All remote images in one place; swap for CMS/backend URLs later.
const u = (id: string, w = 1600) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`
export const img = {
  hero: u('1600596542815-ffad4c1539a9', 2000), intro: u('1600585154340-be6161a56a0c'), cta: u('1613490493576-7fde63acd811', 2000),
  p: ['1512917774080-9991f1c4c750','1545324418-cc1a3fa10c00','1600607687939-ce8a6c25118c','1486406146926-c627a92ad1ab','1600566753190-17f0baa2a6c3','1564013799919-ab600027ffc6','1502672260266-1c1ef2d93688','1560448204-e02f11c3d0e2'].map((i) => u(i)),
  a: ['1518780664697-55e3ad937233','1600047509807-ba8f99d2cdde','1580587771525-78b9dba3b914'].map((i) => u(i, 1000)),
}
