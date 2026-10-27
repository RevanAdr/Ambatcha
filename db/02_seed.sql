-- Sample drinks. Re-running this file updates rows with the same slug.
-- variants: [{"name":"Regular","price":28000}] (price in IDR)
INSERT INTO products (slug,name,description,category,color,badge,ingredients,serving,variants) VALUES
('iced-matcha-latte','Iced Matcha Latte','Whisked matcha shaken with cold milk over ice. Our main product for rn.','Latte','#8DB84A','BEST SELLER',ARRAY['Matcha','Fresh milk','Sugar','Ice'],'Served iced. Sweetness and ice level can be adjusted in your order notes.','[{"name":"Regular (12oz)","price":10000}]')
-- ('hojicha-matcha-latte','Hojicha Matcha Latte','Roasted, nutty hojicha swirled with matcha.','Latte','#B58A5A','NEW',ARRAY['Matcha','Hojicha','Fresh milk','Ice'],'Served iced or hot.','[{"name":"Regular","price":30000},{"name":"Large","price":37000}]'),
-- ('strawberry-matcha','Strawberry Matcha','Strawberry puree below, matcha milk on top. Stir before sipping.','Flavored','#E8A5A0','LIMITED',ARRAY['Matcha','Strawberry puree','Fresh milk','Ice'],'Served iced.','[{"name":"Regular","price":32000},{"name":"Large","price":39000}]'),
-- ('coconut-matcha','Coconut Matcha','Matcha over chilled coconut water with a coconut cream cap.','Flavored','#C9B458',NULL,ARRAY['Matcha','Coconut water','Coconut cream','Ice'],'Served iced.','[{"name":"Regular","price":31000}]'),
-- ('pure-matcha','Pure Matcha','Just matcha and water. Strong, clean and not sweet.','Classic','#6E9A3C',NULL,ARRAY['Matcha','Water','Ice'],'Served iced or hot.','[{"name":"Regular","price":24000}]')
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name, description = EXCLUDED.description, category = EXCLUDED.category,
  color = EXCLUDED.color, badge = EXCLUDED.badge, ingredients = EXCLUDED.ingredients,
  serving = EXCLUDED.serving, variants = EXCLUDED.variants;

