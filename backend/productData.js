
const products = [
    {
        "id": "P001",
        "product_name": "Organic Apple",
        "category": "Fruits",
        "main_category": "Grocery",
        "brand": "FreshFarm",
        "product_image": "https://example.com/images/organic_apple.jpg",
        "supplier": {
            "id": "S001",
            "name": "Green Valley Suppliers",
            "email": "contact@greenvalleysuppliers.com",
            "phone": "+1234567890"
        },
        "stock_description": {
            "product_id": "P001",
            "stock_quantity": 120,
            "expiry_date": "2024-10-15",
            "critical_quantity": 20
        }
    },
    {
        "id": "P002",
        "product_name": "Whole Wheat Bread",
        "category": "Bakery",
        "main_category": "Grocery",
        "brand": "Baker's Delight",
        "product_image": "https://example.com/images/whole_wheat_bread.jpg",
        "supplier": {
            "id": "S002",
            "name": "Daily Breads Co.",
            "email": "info@dailybreadsco.com",
            "phone": "+0987654321"
        },
        "stock_description": {
            "product_id": "P002",
            "stock_quantity": 75,
            "expiry_date": "2024-08-20",
            "critical_quantity": 10
        }
    },
    {
        "id": "P003",
        "product_name": "Almond Milk",
        "category": "Dairy Alternatives",
        "main_category": "Grocery",
        "brand": "NutriMilk",
        "product_image": "https://example.com/images/almond_milk.jpg",
        "supplier": {
            "id": "S003",
            "name": "NutriBev Supplies",
            "email": "support@nutribevsupplies.com",
            "phone": "+1122334455"
        },
        "stock_description": {
            "product_id": "P003",
            "stock_quantity": 50,
            "expiry_date": "2024-12-01",
            "critical_quantity": 15
        }
    },
    {
        "id": "P004",
        "product_name": "Chia Seeds",
        "category": "Health Foods",
        "main_category": "Grocery",
        "brand": "SuperSeeds",
        "product_image": "https://example.com/images/chia_seeds.jpg",
        "supplier": {
            "id": "S004",
            "name": "Healthy Life Goods",
            "email": "sales@healthylifegoods.com",
            "phone": "+1230984567"
        },
        "stock_description": {
            "product_id": "P004",
            "stock_quantity": 200,
            "expiry_date": "2025-01-10",
            "critical_quantity": 50
        }
    },
    {
        "id": "P005",
        "product_name": "Tomato Sauce",
        "category": "Condiments",
        "main_category": "Grocery",
        "brand": "Sauce Masters",
        "product_image": "https://example.com/images/tomato_sauce.jpg",
        "supplier": {
            "id": "S005",
            "name": "Sauce Factory Inc.",
            "email": "orders@saucefactoryinc.com",
            "phone": "+3216549870"
        },
        "stock_description": {
            "product_id": "P005",
            "stock_quantity": 30,
            "expiry_date": "2024-09-30",
            "critical_quantity": 5
        }
    },
    {
        "id": "P006",
        "product_name": "Organic Banana",
        "category": "Fruits",
        "main_category": "Grocery",
        "brand": "FreshFarm",
        "product_image": "https://example.com/images/organic_banana.jpg",
        "supplier": {
            "id": "S006",
            "name": "Green Valley Suppliers",
            "email": "contact@greenvalleysuppliers.com",
            "phone": "+1234567891"
        },
        "stock_description": {
            "product_id": "P006",
            "stock_quantity": 150,
            "expiry_date": "2024-11-05",
            "critical_quantity": 25
        }
    },
    {
        "id": "P007",
        "product_name": "Skim Milk",
        "category": "Dairy",
        "main_category": "Grocery",
        "brand": "DairyPure",
        "product_image": "https://example.com/images/skim_milk.jpg",
        "supplier": {
            "id": "S007",
            "name": "Dairy Pure Co.",
            "email": "contact@dairypureco.com",
            "phone": "+1345678901"
        },
        "stock_description": {
            "product_id": "P007",
            "stock_quantity": 80,
            "expiry_date": "2024-07-15",
            "critical_quantity": 20
        }
    },
    {
        "id": "P008",
        "product_name": "Granola Bars",
        "category": "Snacks",
        "main_category": "Grocery",
        "brand": "SnackTime",
        "product_image": "https://example.com/images/granola_bars.jpg",
        "supplier": {
            "id": "S008",
            "name": "SnackTime Inc.",
            "email": "sales@snacktimeinc.com",
            "phone": "+1456789012"
        },
        "stock_description": {
            "product_id": "P008",
            "stock_quantity": 90,
            "expiry_date": "2024-06-10",
            "critical_quantity": 15
        }
    },
    {
        "id": "P009",
        "product_name": "Spaghetti Pasta",
        "category": "Pasta",
        "main_category": "Grocery",
        "brand": "PastaMaster",
        "product_image": "https://example.com/images/spaghetti_pasta.jpg",
        "supplier": {
            "id": "S009",
            "name": "PastaMaster Foods",
            "email": "info@pastamasterfoods.com",
            "phone": "+1567890123"
        },
        "stock_description": {
            "product_id": "P009",
            "stock_quantity": 60,
            "expiry_date": "2024-11-20",
            "critical_quantity": 10
        }
    },
    {
        "id": "P010",
        "product_name": "Olive Oil",
        "category": "Oils",
        "main_category": "Grocery",
        "brand": "PureOlive",
        "product_image": "https://example.com/images/olive_oil.jpg",
        "supplier": {
            "id": "S010",
            "name": "Olive Essentials",
            "email": "contact@oliveessentials.com",
            "phone": "+1678901234"
        },
        "stock_description": {
            "product_id": "P010",
            "stock_quantity": 45,
            "expiry_date": "2025-03-10",
            "critical_quantity": 10
        }
    },
    {
        "id": "P011",
        "product_name": "Brown Rice",
        "category": "Grains",
        "main_category": "Grocery",
        "brand": "RiceLand",
        "product_image": "https://example.com/images/brown_rice.jpg",
        "supplier": {
            "id": "S011",
            "name": "Grain Co.",
            "email": "info@grainco.com",
            "phone": "+1789012345"
        },
        "stock_description": {
            "product_id": "P011",
            "stock_quantity": 85,
            "expiry_date": "2024-09-01",
            "critical_quantity": 15
        }
    },
    {
        "id": "P012",
        "product_name": "Greek Yogurt",
        "category": "Dairy",
        "main_category": "Grocery",
        "brand": "YogurtPlus",
        "product_image": "https://example.com/images/greek_yogurt.jpg",
        "supplier": {
            "id": "S012",
            "name": "Dairy Delights",
            "email": "contact@dairydelights.com",
            "phone": "+1890123456"
        },
        "stock_description": {
            "product_id": "P012",
            "stock_quantity": 70,
            "expiry_date": "2024-12-15",
            "critical_quantity": 12
        }
    },
    {
        "id": "P013",
        "product_name": "Peanut Butter",
        "category": "Spreads",
        "main_category": "Grocery",
        "brand": "NutSpread",
        "product_image": "https://example.com/images/peanut_butter.jpg",
        "supplier": {
            "id": "S013",
            "name": "NutSpread Co.",
            "email": "info@nutspreadco.com",
            "phone": "+1901234567"
        },
        "stock_description": {
            "product_id": "P013",
            "stock_quantity": 40,
            "expiry_date": "2024-08-30",
            "critical_quantity": 8
        }
    },
    {
        "id": "P014",
        "product_name": "Frozen Berries",
        "category": "Frozen Foods",
        "main_category": "Grocery",
        "brand": "BerryBest",
        "product_image": "https://example.com/images/frozen_berries.jpg",
        "supplier": {
            "id": "S014",
            "name": "BerryBest Supplies",
            "email": "support@berrybestsupplies.com",
            "phone": "+2012345678"
        },
        "stock_description": {
            "product_id": "P014",
            "stock_quantity": 55,
            "expiry_date": "2024-05-20",
            "critical_quantity": 10
        }
    },
    {
        "id": "P015",
        "product_name": "Soy Sauce",
        "category": "Condiments",
        "main_category": "Grocery",
        "brand": "SoyDelight",
        "product_image": "https://example.com/images/soy_sauce.jpg",
        "supplier": {
            "id": "S015",
            "name": "Asian Flavors Inc.",
            "email": "contact@asianflavorsinc.com",
            "phone": "+2123456789"
        },
        "stock_description": {
            "product_id": "P015",
            "stock_quantity": 90,
            "expiry_date": "2024-11-01",
            "critical_quantity": 20
        }
    },
    {
        "id": "P016",
        "product_name": "Canned Beans",
        "category": "Canned Goods",
        "main_category": "Grocery",
        "brand": "BeanMaster",
        "product_image": "https://example.com/images/canned_beans.jpg",
        "supplier": {
            "id": "S016",
            "name": "BeanMaster Co.",
            "email": "info@beanmasterco.com",
            "phone": "+2234567890"
        },
        "stock_description": {
            "product_id": "P016",
            "stock_quantity": 60,
            "expiry_date": "2024-07-01",
            "critical_quantity": 12
        }
    },
    {
        "id": "P017",
        "product_name": "Apple Cider Vinegar",
        "category": "Vinegars",
        "main_category": "Grocery",
        "brand": "CiderFarm",
        "product_image": "https://example.com/images/apple_cider_vinegar.jpg",
        "supplier": {
            "id": "S017",
            "name": "CiderFarm Ltd.",
            "email": "contact@ciderfarm.com",
            "phone": "+2345678901"
        },
        "stock_description": {
            "product_id": "P017",
            "stock_quantity": 30,
            "expiry_date": "2025-02-01",
            "critical_quantity": 8
        }
    },
    {
        "id": "P018",
        "product_name": "Coconut Oil",
        "category": "Oils",
        "main_category": "Grocery",
        "brand": "CocoPure",
        "product_image": "https://example.com/images/coconut_oil.jpg",
        "supplier": {
            "id": "S018",
            "name": "CocoPure Essentials",
            "email": "info@cocopureessentials.com",
            "phone": "+2456789012"
        },
        "stock_description": {
            "product_id": "P018",
            "stock_quantity": 85,
            "expiry_date": "2025-04-10",
            "critical_quantity": 15
        }
    },
    {
        "id": "P019",
        "product_name": "Cereal Oats",
        "category": "Cereals",
        "main_category": "Grocery",
        "brand": "OatWorld",
        "product_image": "https://example.com/images/cereal_oats.jpg",
        "supplier": {
            "id": "S019",
            "name": "OatWorld Inc.",
            "email": "sales@oatworldinc.com",
            "phone": "+2567890123"
        },
        "stock_description": {
            "product_id": "P019",
            "stock_quantity": 100,
            "expiry_date": "2024-10-01",
            "critical_quantity": 20
        }
    },
    {
        "id": "P020",
        "product_name": "Dark Chocolate",
        "category": "Snacks",
        "main_category": "Grocery",
        "brand": "ChocoDelight",
        "product_image": "https://example.com/images/dark_chocolate.jpg",
        "supplier": {
            "id": "S020",
            "name": "ChocoDelight Co.",
            "email": "info@chocodelightco.com",
            "phone": "+2678901234"
        },
        "stock_description": {
            "product_id": "P020",
            "stock_quantity": 40,
            "expiry_date": "2024-06-15",
            "critical_quantity": 10
        }
    },
    {
        "id": "P021",
        "product_name": "Honey",
        "category": "Sweeteners",
        "main_category": "Grocery",
        "brand": "PureHoney",
        "product_image": "https://example.com/images/honey.jpg",
        "supplier": {
            "id": "S021",
            "name": "PureHoney Ltd.",
            "email": "support@purehoney.com",
            "phone": "+2789012345"
        },
        "stock_description": {
            "product_id": "P021",
            "stock_quantity": 55,
            "expiry_date": "2025-06-30",
            "critical_quantity": 12
        }
    },
    {
        "id": "P022",
        "product_name": "Lentils",
        "category": "Grains",
        "main_category": "Grocery",
        "brand": "LegumeLand",
        "product_image": "https://example.com/images/lentils.jpg",
        "supplier": {
            "id": "S022",
            "name": "LegumeLand Inc.",
            "email": "info@legumelandinc.com",
            "phone": "+2890123456"
        },
        "stock_description": {
            "product_id": "P022",
            "stock_quantity": 65,
            "expiry_date": "2024-08-01",
            "critical_quantity": 15
        }
    },
    {
        "id": "P023",
        "product_name": "Pita Bread",
        "category": "Bakery",
        "main_category": "Grocery",
        "brand": "BreadWorld",
        "product_image": "https://example.com/images/pita_bread.jpg",
        "supplier": {
            "id": "S023",
            "name": "BreadWorld Ltd.",
            "email": "contact@breadworld.com",
            "phone": "+2901234567"
        },
        "stock_description": {
            "product_id": "P023",
            "stock_quantity": 85,
            "expiry_date": "2024-09-10",
            "critical_quantity": 18
        }
    },
    {
        "id": "P024",
        "product_name": "Balsamic Vinegar",
        "category": "Vinegars",
        "main_category": "Grocery",
        "brand": "VinegarArt",
        "product_image": "https://example.com/images/balsamic_vinegar.jpg",
        "supplier": {
            "id": "S024",
            "name": "VinegarArt Co.",
            "email": "info@vinegarartco.com",
            "phone": "+3012345678"
        },
        "stock_description": {
            "product_id": "P024",
            "stock_quantity": 40,
            "expiry_date": "2025-01-01",
            "critical_quantity": 10
        }
    },
    {
        "id": "P025",
        "product_name": "Granulated Sugar",
        "category": "Sweeteners",
        "main_category": "Grocery",
        "brand": "SweetLife",
        "product_image": "https://example.com/images/granulated_sugar.jpg",
        "supplier": {
            "id": "S025",
            "name": "SweetLife Inc.",
            "email": "contact@sweetlifeinc.com",
            "phone": "+3123456789"
        },
        "stock_description": {
            "product_id": "P025",
            "stock_quantity": 120,
            "expiry_date": "2025-02-15",
            "critical_quantity": 25
        }
    },
    {
        "id": "P026",
        "product_name": "Pineapple Juice",
        "category": "Beverages",
        "main_category": "Grocery",
        "brand": "TropicalJuice",
        "product_image": "https://example.com/images/pineapple_juice.jpg",
        "supplier": {
            "id": "S026",
            "name": "TropicalJuice Ltd.",
            "email": "info@tropicaljuice.com",
            "phone": "+3234567890"
        },
        "stock_description": {
            "product_id": "P026",
            "stock_quantity": 90,
            "expiry_date": "2024-11-10",
            "critical_quantity": 15
        }
    },
    {
        "id": "P027",
        "product_name": "Black Beans",
        "category": "Canned Goods",
        "main_category": "Grocery",
        "brand": "BeanWorks",
        "product_image": "https://example.com/images/black_beans.jpg",
        "supplier": {
            "id": "S027",
            "name": "BeanWorks Co.",
            "email": "sales@beanworksco.com",
            "phone": "+3345678901"
        },
        "stock_description": {
            "product_id": "P027",
            "stock_quantity": 80,
            "expiry_date": "2024-06-15",
            "critical_quantity": 12
        }
    },
    {
        "id": "P028",
        "product_name": "Oat Milk",
        "category": "Dairy Alternatives",
        "main_category": "Grocery",
        "brand": "OatDelight",
        "product_image": "https://example.com/images/oat_milk.jpg",
        "supplier": {
            "id": "S028",
            "name": "OatDelight Inc.",
            "email": "info@oatdelightinc.com",
            "phone": "+3456789012"
        },
        "stock_description": {
            "product_id": "P028",
            "stock_quantity": 70,
            "expiry_date": "2024-09-05",
            "critical_quantity": 15
        }
    },
    {
        "id": "P029",
        "product_name": "Cooking Oil",
        "category": "Oils",
        "main_category": "Grocery",
        "brand": "ChefChoice",
        "product_image": "https://example.com/images/cooking_oil.jpg",
        "supplier": {
            "id": "S029",
            "name": "ChefChoice Ltd.",
            "email": "contact@chefchoice.com",
            "phone": "+3567890123"
        },
        "stock_description": {
            "product_id": "P029",
            "stock_quantity": 60,
            "expiry_date": "2024-12-01",
            "critical_quantity": 12
        }
    },
    {
        "id": "P030",
        "product_name": "Apple Sauce",
        "category": "Condiments",
        "main_category": "Grocery",
        "brand": "FruitEssence",
        "product_image": "https://example.com/images/apple_sauce.jpg",
        "supplier": {
            "id": "S030",
            "name": "FruitEssence Co.",
            "email": "info@fruitessenceco.com",
            "phone": "+3678901234"
        },
        "stock_description": {
            "product_id": "P030",
            "stock_quantity": 90,
            "expiry_date": "2024-08-10",
            "critical_quantity": 20
        }
    },
    {
        "id": "P031",
        "product_name": "Canned Tuna",
        "category": "Canned Goods",
        "main_category": "Grocery",
        "brand": "TunaTime",
        "product_image": "https://example.com/images/canned_tuna.jpg",
        "supplier": {
            "id": "S031",
            "name": "TunaTime Ltd.",
            "email": "contact@tunatime.com",
            "phone": "+3789012345"
        },
        "stock_description": {
            "product_id": "P031",
            "stock_quantity": 70,
            "expiry_date": "2024-07-20",
            "critical_quantity": 10
        }
    },
    {
        "id": "P032",
        "product_name": "Cashew Nuts",
        "category": "Snacks",
        "main_category": "Grocery",
        "brand": "NuttyNuts",
        "product_image": "https://example.com/images/cashew_nuts.jpg",
        "supplier": {
            "id": "S032",
            "name": "NuttyNuts Inc.",
            "email": "info@nuttynutsinc.com",
            "phone": "+3890123456"
        },
        "stock_description": {
            "product_id": "P032",
            "stock_quantity": 85,
            "expiry_date": "2024-11-30",
            "critical_quantity": 15
        }
    },
    {
        "id": "P033",
        "product_name": "Organic Honey",
        "category": "Sweeteners",
        "main_category": "Grocery",
        "brand": "HoneyPure",
        "product_image": "https://example.com/images/organic_honey.jpg",
        "supplier": {
            "id": "S033",
            "name": "HoneyPure Ltd.",
            "email": "contact@honeypure.com",
            "phone": "+3901234567"
        },
        "stock_description": {
            "product_id": "P033",
            "stock_quantity": 50,
            "expiry_date": "2025-03-15",
            "critical_quantity": 8
        }
    },
    {
        "id": "P034",
        "product_name": "Rice Noodles",
        "category": "Noodles",
        "main_category": "Grocery",
        "brand": "NoodleHouse",
        "product_image": "https://example.com/images/rice_noodles.jpg",
        "supplier": {
            "id": "S034",
            "name": "NoodleHouse Co.",
            "email": "info@noodlehouseco.com",
            "phone": "+4012345678"
        },
        "stock_description": {
            "product_id": "P034",
            "stock_quantity": 65,
            "expiry_date": "2024-12-01",
            "critical_quantity": 15
        }
    },
    {
        "id": "P035",
        "product_name": "Organic Tea",
        "category": "Beverages",
        "main_category": "Grocery",
        "brand": "TeaGarden",
        "product_image": "https://example.com/images/organic_tea.jpg",
        "supplier": {
            "id": "S035",
            "name": "TeaGarden Ltd.",
            "email": "contact@teagarden.com",
            "phone": "+4123456789"
        },
        "stock_description": {
            "product_id": "P035",
            "stock_quantity": 55,
            "expiry_date": "2025-05-01",
            "critical_quantity": 10
        }
    },
    {
        "id": "P036",
        "product_name": "Peach Jam",
        "category": "Spreads",
        "main_category": "Grocery",
        "brand": "JamDelight",
        "product_image": "https://example.com/images/peach_jam.jpg",
        "supplier": {
            "id": "S036",
            "name": "JamDelight Inc.",
            "email": "info@jamdelightinc.com",
            "phone": "+4234567890"
        },
        "stock_description": {
            "product_id": "P036",
            "stock_quantity": 80,
            "expiry_date": "2024-07-01",
            "critical_quantity": 12
        }
    },
    {
        "id": "P037",
        "product_name": "Quinoa",
        "category": "Grains",
        "main_category": "Grocery",
        "brand": "QuinoaLand",
        "product_image": "https://example.com/images/quinoa.jpg",
        "supplier": {
            "id": "S037",
            "name": "QuinoaLand Co.",
            "email": "info@quinolandco.com",
            "phone": "+4345678901"
        },
        "stock_description": {
            "product_id": "P037",
            "stock_quantity": 90,
            "expiry_date": "2024-08-15",
            "critical_quantity": 20
        }
    },
    {
        "id": "P038",
        "product_name": "Maple Syrup",
        "category": "Sweeteners",
        "main_category": "Grocery",
        "brand": "MaplePure",
        "product_image": "https://example.com/images/maple_syrup.jpg",
        "supplier": {
            "id": "S038",
            "name": "MaplePure Ltd.",
            "email": "info@maplepure.com",
            "phone": "+4456789012"
        },
        "stock_description": {
            "product_id": "P038",
            "stock_quantity": 35,
            "expiry_date": "2025-01-01",
            "critical_quantity": 7
        }
    },
    {
        "id": "P039",
        "product_name": "Frozen Vegetables",
        "category": "Frozen Foods",
        "main_category": "Grocery",
        "brand": "VeggieFreeze",
        "product_image": "https://example.com/images/frozen_vegetables.jpg",
        "supplier": {
            "id": "S039",
            "name": "VeggieFreeze Inc.",
            "email": "support@veggiefreezeinc.com",
            "phone": "+4567890123"
        },
        "stock_description": {
            "product_id": "P039",
            "stock_quantity": 50,
            "expiry_date": "2024-06-30",
            "critical_quantity": 10
        }
    },
    {
        "id": "P040",
        "product_name": "Almond Butter",
        "category": "Spreads",
        "main_category": "Grocery",
        "brand": "NuttySpread",
        "product_image": "https://example.com/images/almond_butter.jpg",
        "supplier": {
            "id": "S040",
            "name": "NuttySpread Co.",
            "email": "info@nuttyspreadco.com",
            "phone": "+4678901234"
        },
        "stock_description": {
            "product_id": "P040",
            "stock_quantity": 60,
            "expiry_date": "2024-10-15",
            "critical_quantity": 10
        }
    },
    {
        "id": "P001",
        "product_name": "Wooden Dining Table",
        "category": "Dining",
        "main_category": "Furniture",
        "brand": "TimberCraft",
        "product_image": "https://example.com/images/wooden_dining_table.jpg",
        "supplier": {
            "id": "S001",
            "name": "TimberCraft Furniture",
            "email": "info@timbercraft.com",
            "phone": "+1001234567"
        },
        "stock_description": {
            "product_id": "P001",
            "stock_quantity": 20,
            "expiry_date": "N/A",
            "critical_quantity": 5
        }
    },
    {
        "id": "P002",
        "product_name": "Leather Sofa",
        "category": "Living Room",
        "main_category": "Furniture",
        "brand": "Luxura",
        "product_image": "https://example.com/images/leather_sofa.jpg",
        "supplier": {
            "id": "S002",
            "name": "Luxura Living",
            "email": "contact@luxuraliving.com",
            "phone": "+1012345678"
        },
        "stock_description": {
            "product_id": "P002",
            "stock_quantity": 15,
            "expiry_date": "N/A",
            "critical_quantity": 3
        }
    },
    {
        "id": "P003",
        "product_name": "Modern Coffee Table",
        "category": "Living Room",
        "main_category": "Furniture",
        "brand": "DesignPro",
        "product_image": "https://example.com/images/modern_coffee_table.jpg",
        "supplier": {
            "id": "S003",
            "name": "DesignPro Furniture",
            "email": "sales@designpro.com",
            "phone": "+1023456789"
        },
        "stock_description": {
            "product_id": "P003",
            "stock_quantity": 30,
            "expiry_date": "N/A",
            "critical_quantity": 10
        }
    },
    {
        "id": "P004",
        "product_name": "Wooden Bed Frame",
        "category": "Bedroom",
        "main_category": "Furniture",
        "brand": "SleepWell",
        "product_image": "https://example.com/images/wooden_bed_frame.jpg",
        "supplier": {
            "id": "S004",
            "name": "SleepWell Furnishings",
            "email": "info@sleepwellfurnishings.com",
            "phone": "+1034567890"
        },
        "stock_description": {
            "product_id": "P004",
            "stock_quantity": 25,
            "expiry_date": "N/A",
            "critical_quantity": 7
        }
    },
    {
        "id": "P005",
        "product_name": "Ergonomic Office Chair",
        "category": "Office",
        "main_category": "Furniture",
        "brand": "OfficeMate",
        "product_image": "https://example.com/images/ergonomic_office_chair.jpg",
        "supplier": {
            "id": "S005",
            "name": "OfficeMate Inc.",
            "email": "support@officemate.com",
            "phone": "+1045678901"
        },
        "stock_description": {
            "product_id": "P005",
            "stock_quantity": 40,
            "expiry_date": "N/A",
            "critical_quantity": 10
        }
    },
    {
        "id": "P006",
        "product_name": "Bookshelf",
        "category": "Storage",
        "main_category": "Furniture",
        "brand": "BookSafe",
        "product_image": "https://example.com/images/bookshelf.jpg",
        "supplier": {
            "id": "S006",
            "name": "BookSafe Designs",
            "email": "info@booksafedesigns.com",
            "phone": "+1056789012"
        },
        "stock_description": {
            "product_id": "P006",
            "stock_quantity": 18,
            "expiry_date": "N/A",
            "critical_quantity": 5
        }
    },
    {
        "id": "P007",
        "product_name": "Dining Chair Set",
        "category": "Dining",
        "main_category": "Furniture",
        "brand": "ElegantSeats",
        "product_image": "https://example.com/images/dining_chair_set.jpg",
        "supplier": {
            "id": "S007",
            "name": "ElegantSeats Ltd.",
            "email": "sales@elegantseats.com",
            "phone": "+1067890123"
        },
        "stock_description": {
            "product_id": "P007",
            "stock_quantity": 25,
            "expiry_date": "N/A",
            "critical_quantity": 6
        }
    },
    {
        "id": "P008",
        "product_name": "Glass Display Cabinet",
        "category": "Living Room",
        "main_category": "Furniture",
        "brand": "DisplayArt",
        "product_image": "https://example.com/images/glass_display_cabinet.jpg",
        "supplier": {
            "id": "S008",
            "name": "DisplayArt Furnishings",
            "email": "info@displayartfurnishings.com",
            "phone": "+1078901234"
        },
        "stock_description": {
            "product_id": "P008",
            "stock_quantity": 12,
            "expiry_date": "N/A",
            "critical_quantity": 4
        }
    },
    {
        "id": "P009",
        "product_name": "Rustic Side Table",
        "category": "Living Room",
        "main_category": "Furniture",
        "brand": "RusticCharm",
        "product_image": "https://example.com/images/rustic_side_table.jpg",
        "supplier": {
            "id": "S009",
            "name": "RusticCharm Inc.",
            "email": "contact@rusticcharm.com",
            "phone": "+1089012345"
        },
        "stock_description": {
            "product_id": "P009",
            "stock_quantity": 22,
            "expiry_date": "N/A",
            "critical_quantity": 6
        }
    },
    {
        "id": "P010",
        "product_name": "Recliner Chair",
        "category": "Living Room",
        "main_category": "Furniture",
        "brand": "ComfortZone",
        "product_image": "https://example.com/images/recliner_chair.jpg",
        "supplier": {
            "id": "S010",
            "name": "ComfortZone Furnishings",
            "email": "support@comfortzone.com",
            "phone": "+1090123456"
        },
        "stock_description": {
            "product_id": "P010",
            "stock_quantity": 30,
            "expiry_date": "N/A",
            "critical_quantity": 8
        }
    },
    {
        "id": "P011",
        "product_name": "Glass Coffee Table",
        "category": "Living Room",
        "main_category": "Furniture",
        "brand": "ClearView",
        "product_image": "https://example.com/images/glass_coffee_table.jpg",
        "supplier": {
            "id": "S011",
            "name": "ClearView Designs",
            "email": "info@clearviewdesigns.com",
            "phone": "+1101234567"
        },
        "stock_description": {
            "product_id": "P011",
            "stock_quantity": 20,
            "expiry_date": "N/A",
            "critical_quantity": 5
        }
    },
    {
        "id": "P012",
        "product_name": "Oak Wardrobe",
        "category": "Bedroom",
        "main_category": "Furniture",
        "brand": "OakHouse",
        "product_image": "https://example.com/images/oak_wardrobe.jpg",
        "supplier": {
            "id": "S012",
            "name": "OakHouse Ltd.",
            "email": "contact@oakhouse.com",
            "phone": "+1112345678"
        },
        "stock_description": {
            "product_id": "P012",
            "stock_quantity": 14,
            "expiry_date": "N/A",
            "critical_quantity": 4
        }
    },
    {
        "id": "P013",
        "product_name": "Contemporary Desk",
        "category": "Office",
        "main_category": "Furniture",
        "brand": "ModernWork",
        "product_image": "https://example.com/images/contemporary_desk.jpg",
        "supplier": {
            "id": "S013",
            "name": "ModernWork Inc.",
            "email": "info@modernwork.com",
            "phone": "+1123456789"
        },
        "stock_description": {
            "product_id": "P013",
            "stock_quantity": 25,
            "expiry_date": "N/A",
            "critical_quantity": 5
        }
    },
    {
        "id": "P014",
        "product_name": "Vintage Armchair",
        "category": "Living Room",
        "main_category": "Furniture",
        "brand": "VintageElegance",
        "product_image": "https://example.com/images/vintage_armchair.jpg",
        "supplier": {
            "id": "S014",
            "name": "VintageElegance Ltd.",
            "email": "sales@vintageelegance.com",
            "phone": "+1134567890"
        },
        "stock_description": {
            "product_id": "P014",
            "stock_quantity": 18,
            "expiry_date": "N/A",
            "critical_quantity": 6
        }
    },
    {
        "id": "P015",
        "product_name": "Modular Bookshelf",
        "category": "Storage",
        "main_category": "Furniture",
        "brand": "ModularHome",
        "product_image": "https://example.com/images/modular_bookshelf.jpg",
        "supplier": {
            "id": "S015",
            "name": "ModularHome Designs",
            "email": "info@modularhome.com",
            "phone": "+1145678901"
        },
        "stock_description": {
            "product_id": "P015",
            "stock_quantity": 22,
            "expiry_date": "N/A",
            "critical_quantity": 5
        }
    },
    {
        "id": "P016",
        "product_name": "Adjustable Bed Base",
        "category": "Bedroom",
        "main_category": "Furniture",
        "brand": "SleepTech",
        "product_image": "https://example.com/images/adjustable_bed_base.jpg",
        "supplier": {
            "id": "S016",
            "name": "SleepTech Ltd.",
            "email": "support@sleeptech.com",
            "phone": "+1156789012"
        },
        "stock_description": {
            "product_id": "P016",
            "stock_quantity": 16,
            "expiry_date": "N/A",
            "critical_quantity": 4
        }
    },
    {
        "id": "P017",
        "product_name": "Barstool Set",
        "category": "Dining",
        "main_category": "Furniture",
        "brand": "BarHeight",
        "product_image": "https://example.com/images/barstool_set.jpg",
        "supplier": {
            "id": "S017",
            "name": "BarHeight Furniture",
            "email": "info@barheightfurniture.com",
            "phone": "+1167890123"
        },
        "stock_description": {
            "product_id": "P017",
            "stock_quantity": 28,
            "expiry_date": "N/A",
            "critical_quantity": 7
        }
    },
    {
        "id": "P018",
        "product_name": "Compact Nightstand",
        "category": "Bedroom",
        "main_category": "Furniture",
        "brand": "CompactFurnish",
        "product_image": "https://example.com/images/compact_nightstand.jpg",
        "supplier": {
            "id": "S018",
            "name": "CompactFurnish Co.",
            "email": "contact@compactfurnish.com",
            "phone": "+1178901234"
        },
        "stock_description": {
            "product_id": "P018",
            "stock_quantity": 34,
            "expiry_date": "N/A",
            "critical_quantity": 8
        }
    },
    {
        "id": "P019",
        "product_name": "Modular Sofa",
        "category": "Living Room",
        "main_category": "Furniture",
        "brand": "ModularLiving",
        "product_image": "https://example.com/images/modular_sofa.jpg",
        "supplier": {
            "id": "S019",
            "name": "ModularLiving Ltd.",
            "email": "sales@modularliving.com",
            "phone": "+1189012345"
        },
        "stock_description": {
            "product_id": "P019",
            "stock_quantity": 20,
            "expiry_date": "N/A",
            "critical_quantity": 6
        }
    },
    {
        "id": "P020",
        "product_name": "Reclining Office Chair",
        "category": "Office",
        "main_category": "Furniture",
        "brand": "ComfortPro",
        "product_image": "https://example.com/images/reclining_office_chair.jpg",
        "supplier": {
            "id": "S020",
            "name": "ComfortPro Solutions",
            "email": "info@comfortprosolutions.com",
            "phone": "+1190123456"
        },
        "stock_description": {
            "product_id": "P020",
            "stock_quantity": 25,
            "expiry_date": "N/A",
            "critical_quantity": 5
        }
    },
    {
        "id": "P021",
        "product_name": "Industrial Shelf",
        "category": "Storage",
        "main_category": "Furniture",
        "brand": "IndustrialDesign",
        "product_image": "https://example.com/images/industrial_shelf.jpg",
        "supplier": {
            "id": "S021",
            "name": "IndustrialDesign Inc.",
            "email": "contact@industrialdesign.com",
            "phone": "+1201234567"
        },
        "stock_description": {
            "product_id": "P021",
            "stock_quantity": 10,
            "expiry_date": "N/A",
            "critical_quantity": 4
        }
    },
    {
        "id": "P022",
        "product_name": "Corner Desk",
        "category": "Office",
        "main_category": "Furniture",
        "brand": "OfficeFlex",
        "product_image": "https://example.com/images/corner_desk.jpg",
        "supplier": {
            "id": "S022",
            "name": "OfficeFlex Designs",
            "email": "info@officeflexdesigns.com",
            "phone": "+1212345678"
        },
        "stock_description": {
            "product_id": "P022",
            "stock_quantity": 22,
            "expiry_date": "N/A",
            "critical_quantity": 6
        }
    },
    {
        "id": "P023",
        "product_name": "Folding Dining Table",
        "category": "Dining",
        "main_category": "Furniture",
        "brand": "FoldEasy",
        "product_image": "https://example.com/images/folding_dining_table.jpg",
        "supplier": {
            "id": "S023",
            "name": "FoldEasy Furniture",
            "email": "contact@foldeasyfurniture.com",
            "phone": "+1223456789"
        },
        "stock_description": {
            "product_id": "P023",
            "stock_quantity": 30,
            "expiry_date": "N/A",
            "critical_quantity": 8
        }
    },
    {
        "id": "P024",
        "product_name": "Elegant Console Table",
        "category": "Living Room",
        "main_category": "Furniture",
        "brand": "ElegantDesigns",
        "product_image": "https://example.com/images/elegant_console_table.jpg",
        "supplier": {
            "id": "S024",
            "name": "ElegantDesigns Ltd.",
            "email": "info@elegantdesigns.com",
            "phone": "+1234567890"
        },
        "stock_description": {
            "product_id": "P024",
            "stock_quantity": 14,
            "expiry_date": "N/A",
            "critical_quantity": 5
        }
    },
    {
        "id": "P025",
        "product_name": "Twin Bed Frame",
        "category": "Bedroom",
        "main_category": "Furniture",
        "brand": "SleepWell",
        "product_image": "https://example.com/images/twin_bed_frame.jpg",
        "supplier": {
            "id": "S025",
            "name": "SleepWell Designs",
            "email": "contact@sleepwelldesigns.com",
            "phone": "+1245678901"
        },
        "stock_description": {
            "product_id": "P025",
            "stock_quantity": 20,
            "expiry_date": "N/A",
            "critical_quantity": 6
        }
    },
    {
        "id": "P026",
        "product_name": "Vintage Cabinet",
        "category": "Storage",
        "main_category": "Furniture",
        "brand": "VintageCabinetry",
        "product_image": "https://example.com/images/vintage_cabinet.jpg",
        "supplier": {
            "id": "S026",
            "name": "VintageCabinetry Ltd.",
            "email": "info@vintagecabinetry.com",
            "phone": "+1256789012"
        },
        "stock_description": {
            "product_id": "P026",
            "stock_quantity": 12,
            "expiry_date": "N/A",
            "critical_quantity": 4
        }
    },
    {
        "id": "P027",
        "product_name": "Contemporary Armchair",
        "category": "Living Room",
        "main_category": "Furniture",
        "brand": "Contempo",
        "product_image": "https://example.com/images/contemporary_armchair.jpg",
        "supplier": {
            "id": "S027",
            "name": "Contempo Furniture",
            "email": "sales@contempofurniture.com",
            "phone": "+1267890123"
        },
        "stock_description": {
            "product_id": "P027",
            "stock_quantity": 16,
            "expiry_date": "N/A",
            "critical_quantity": 5
        }
    },
    {
        "id": "P028",
        "product_name": "Multi-Purpose Table",
        "category": "Office",
        "main_category": "Furniture",
        "brand": "WorkFlex",
        "product_image": "https://example.com/images/multi_purpose_table.jpg",
        "supplier": {
            "id": "S028",
            "name": "WorkFlex Solutions",
            "email": "info@workflexsolutions.com",
            "phone": "+1278901234"
        },
        "stock_description": {
            "product_id": "P028",
            "stock_quantity": 20,
            "expiry_date": "N/A",
            "critical_quantity": 7
        }
    },
    {
        "id": "P029",
        "product_name": "Wooden Side Table",
        "category": "Living Room",
        "main_category": "Furniture",
        "brand": "WoodCraft",
        "product_image": "https://example.com/images/wooden_side_table.jpg",
        "supplier": {
            "id": "S029",
            "name": "WoodCraft Ltd.",
            "email": "info@woodcraft.com",
            "phone": "+1289012345"
        },
        "stock_description": {
            "product_id": "P029",
            "stock_quantity": 18,
            "expiry_date": "N/A",
            "critical_quantity": 6
        }
    },
    {
        "id": "P030",
        "product_name": "Elegant Writing Desk",
        "category": "Office",
        "main_category": "Furniture",
        "brand": "WriteEase",
        "product_image": "https://example.com/images/elegant_writing_desk.jpg",
        "supplier": {
            "id": "S030",
            "name": "WriteEase Office Supplies",
            "email": "contact@writeease.com",
            "phone": "+1290123456"
        },
        "stock_description": {
            "product_id": "P030",
            "stock_quantity": 30,
            "expiry_date": "N/A",
            "critical_quantity": 8
        }
    },
    {
        "id": "P031",
        "product_name": "Stylish TV Stand",
        "category": "Living Room",
        "main_category": "Furniture",
        "brand": "StyleHome",
        "product_image": "https://example.com/images/stylish_tv_stand.jpg",
        "supplier": {
            "id": "S031",
            "name": "StyleHome Designs",
            "email": "info@stylehomedesigns.com",
            "phone": "+1301234567"
        },
        "stock_description": {
            "product_id": "P031",
            "stock_quantity": 12,
            "expiry_date": "N/A",
            "critical_quantity": 5
        }
    },
    {
        "id": "P032",
        "product_name": "Wooden Storage Bench",
        "category": "Storage",
        "main_category": "Furniture",
        "brand": "WoodenWorks",
        "product_image": "https://example.com/images/wooden_storage_bench.jpg",
        "supplier": {
            "id": "S032",
            "name": "WoodenWorks Ltd.",
            "email": "contact@woodenworks.com",
            "phone": "+1312345678"
        },
        "stock_description": {
            "product_id": "P032",
            "stock_quantity": 14,
            "expiry_date": "N/A",
            "critical_quantity": 5
        }
    },
    {
        "id": "P033",
        "product_name": "Modern Bed Frame",
        "category": "Bedroom",
        "main_category": "Furniture",
        "brand": "ModernSleep",
        "product_image": "https://example.com/images/modern_bed_frame.jpg",
        "supplier": {
            "id": "S033",
            "name": "ModernSleep Co.",
            "email": "sales@modernsleep.com",
            "phone": "+1323456789"
        },
        "stock_description": {
            "product_id": "P033",
            "stock_quantity": 22,
            "expiry_date": "N/A",
            "critical_quantity": 6
        }
    },
    {
        "id": "P034",
        "product_name": "Vintage Sideboard",
        "category": "Dining",
        "main_category": "Furniture",
        "brand": "VintageStyle",
        "product_image": "https://example.com/images/vintage_sideboard.jpg",
        "supplier": {
            "id": "S034",
            "name": "VintageStyle Furniture",
            "email": "info@vintagestylefurniture.com",
            "phone": "+1334567890"
        },
        "stock_description": {
            "product_id": "P034",
            "stock_quantity": 16,
            "expiry_date": "N/A",
            "critical_quantity": 5
        }
    },
    {
        "id": "P035",
        "product_name": "Luxurious Recliner",
        "category": "Living Room",
        "main_category": "Furniture",
        "brand": "LuxRecline",
        "product_image": "https://example.com/images/luxurious_recliner.jpg",
        "supplier": {
            "id": "S035",
            "name": "LuxRecline Inc.",
            "email": "support@luxrecline.com",
            "phone": "+1345678901"
        },
        "stock_description": {
            "product_id": "P035",
            "stock_quantity": 12,
            "expiry_date": "N/A",
            "critical_quantity": 4
        }
    },
    {
        "id": "P036",
        "product_name": "Compact Office Desk",
        "category": "Office",
        "main_category": "Furniture",
        "brand": "CompactOffice",
        "product_image": "https://example.com/images/compact_office_desk.jpg",
        "supplier": {
            "id": "S036",
            "name": "CompactOffice Designs",
            "email": "info@compactofficedesigns.com",
            "phone": "+1356789012"
        },
        "stock_description": {
            "product_id": "P036",
            "stock_quantity": 28,
            "expiry_date": "N/A",
            "critical_quantity": 6
        }
    },
    {
        "id": "P037",
        "product_name": "Retro Side Chair",
        "category": "Living Room",
        "main_category": "Furniture",
        "brand": "RetroSeats",
        "product_image": "https://example.com/images/retro_side_chair.jpg",
        "supplier": {
            "id": "S037",
            "name": "RetroSeats Co.",
            "email": "contact@retrochairs.com",
            "phone": "+1367890123"
        },
        "stock_description": {
            "product_id": "P037",
            "stock_quantity": 18,
            "expiry_date": "N/A",
            "critical_quantity": 5
        }
    },
    {
        "id": "P038",
        "product_name": "Luxury Armchair",
        "category": "Living Room",
        "main_category": "Furniture",
        "brand": "LuxuryLiving",
        "product_image": "https://example.com/images/luxury_armchair.jpg",
        "supplier": {
            "id": "S038",
            "name": "LuxuryLiving Ltd.",
            "email": "info@luxuryliving.com",
            "phone": "+1378901234"
        },
        "stock_description": {
            "product_id": "P038",
            "stock_quantity": 22,
            "expiry_date": "N/A",
            "critical_quantity": 6
        }
    },
    {
        "id": "P039",
        "product_name": "Modern TV Stand",
        "category": "Living Room",
        "main_category": "Furniture",
        "brand": "ModernView",
        "product_image": "https://example.com/images/modern_tv_stand.jpg",
        "supplier": {
            "id": "S039",
            "name": "ModernView Designs",
            "email": "contact@modernviewdesigns.com",
            "phone": "+1389012345"
        },
        "stock_description": {
            "product_id": "P039",
            "stock_quantity": 25,
            "expiry_date": "N/A",
            "critical_quantity": 7
        }
    },
    {
        "id": "P040",
        "product_name": "Elegant Bedside Table",
        "category": "Bedroom",
        "main_category": "Furniture",
        "brand": "ElegantRest",
        "product_image": "https://example.com/images/elegant_bedside_table.jpg",
        "supplier": {
            "id": "S040",
            "name": "ElegantRest Furnishings",
            "email": "info@elegantrest.com",
            "phone": "+1390123456"
        },
        "stock_description": {
            "product_id": "P040",
            "stock_quantity": 18,
            "expiry_date": "N/A",
            "critical_quantity": 5
        }
    },
    {
        "id": "P041",
        "product_name": "Industrial Desk",
        "category": "Office",
        "main_category": "Furniture",
        "brand": "IndustrialWork",
        "product_image": "https://example.com/images/industrial_desk.jpg",
        "supplier": {
            "id": "S041",
            "name": "IndustrialWork Ltd.",
            "email": "contact@industrialwork.com",
            "phone": "+1401234567"
        },
        "stock_description": {
            "product_id": "P041",
            "stock_quantity": 15,
            "expiry_date": "N/A",
            "critical_quantity": 5
        }
    },
    {
        "id": "P001",
        "product_name": "Smartphone X10",
        "category": "Mobile Phones",
        "main_category": "Electronic",
        "brand": "TechNova",
        "product_image": "https://example.com/images/smartphone_x10.jpg",
        "supplier": {
            "id": "S001",
            "name": "TechNova Electronics",
            "email": "sales@technova.com",
            "phone": "+1000000001"
        },
        "stock_description": {
            "product_id": "P001",
            "stock_quantity": 50,
            "expiry_date": "N/A",
            "critical_quantity": 10
        }
    },
    {
        "id": "P002",
        "product_name": "4K Ultra HD TV",
        "category": "Televisions",
        "main_category": "Electronic",
        "brand": "VisionPro",
        "product_image": "https://example.com/images/4k_ultra_hd_tv.jpg",
        "supplier": {
            "id": "S002",
            "name": "VisionPro Ltd.",
            "email": "support@visionpro.com",
            "phone": "+1000000002"
        },
        "stock_description": {
            "product_id": "P002",
            "stock_quantity": 30,
            "expiry_date": "N/A",
            "critical_quantity": 5
        }
    },
    {
        "id": "P003",
        "product_name": "Bluetooth Headphones",
        "category": "Audio",
        "main_category": "Electronic",
        "brand": "SoundWave",
        "product_image": "https://example.com/images/bluetooth_headphones.jpg",
        "supplier": {
            "id": "S003",
            "name": "SoundWave Inc.",
            "email": "info@soundwave.com",
            "phone": "+1000000003"
        },
        "stock_description": {
            "product_id": "P003",
            "stock_quantity": 100,
            "expiry_date": "N/A",
            "critical_quantity": 20
        }
    },
    {
        "id": "P004",
        "product_name": "Smartwatch Pro",
        "category": "Wearables",
        "main_category": "Electronic",
        "brand": "WearTech",
        "product_image": "https://example.com/images/smartwatch_pro.jpg",
        "supplier": {
            "id": "S004",
            "name": "WearTech Ltd.",
            "email": "sales@weartech.com",
            "phone": "+1000000004"
        },
        "stock_description": {
            "product_id": "P004",
            "stock_quantity": 75,
            "expiry_date": "N/A",
            "critical_quantity": 15
        }
    },
    {
        "id": "P005",
        "product_name": "Gaming Laptop G7",
        "category": "Computers",
        "main_category": "Electronic",
        "brand": "GameTech",
        "product_image": "https://example.com/images/gaming_laptop_g7.jpg",
        "supplier": {
            "id": "S005",
            "name": "GameTech Systems",
            "email": "info@gametech.com",
            "phone": "+1000000005"
        },
        "stock_description": {
            "product_id": "P005",
            "stock_quantity": 25,
            "expiry_date": "N/A",
            "critical_quantity": 8
        }
    },
    {
        "id": "P006",
        "product_name": "Smart Home Hub",
        "category": "Smart Home",
        "main_category": "Electronic",
        "brand": "HomeLink",
        "product_image": "https://example.com/images/smart_home_hub.jpg",
        "supplier": {
            "id": "S006",
            "name": "HomeLink Solutions",
            "email": "contact@homelink.com",
            "phone": "+1000000006"
        },
        "stock_description": {
            "product_id": "P006",
            "stock_quantity": 40,
            "expiry_date": "N/A",
            "critical_quantity": 10
        }
    },
    {
        "id": "P007",
        "product_name": "Digital Camera Z9",
        "category": "Cameras",
        "main_category": "Electronic",
        "brand": "PhotoMax",
        "product_image": "https://example.com/images/digital_camera_z9.jpg",
        "supplier": {
            "id": "S007",
            "name": "PhotoMax Corp.",
            "email": "support@photomax.com",
            "phone": "+1000000007"
        },
        "stock_description": {
            "product_id": "P007",
            "stock_quantity": 15,
            "expiry_date": "N/A",
            "critical_quantity": 5
        }
    },
    {
        "id": "P008",
        "product_name": "Portable Speaker",
        "category": "Audio",
        "main_category": "Electronic",
        "brand": "SoundBlaze",
        "product_image": "https://example.com/images/portable_speaker.jpg",
        "supplier": {
            "id": "S008",
            "name": "SoundBlaze Ltd.",
            "email": "info@soundblaze.com",
            "phone": "+1000000008"
        },
        "stock_description": {
            "product_id": "P008",
            "stock_quantity": 60,
            "expiry_date": "N/A",
            "critical_quantity": 12
        }
    },
    {
        "id": "P009",
        "product_name": "High-Definition Projector",
        "category": "Projectors",
        "main_category": "Electronic",
        "brand": "BrightView",
        "product_image": "https://example.com/images/high_definition_projector.jpg",
        "supplier": {
            "id": "S009",
            "name": "BrightView Tech",
            "email": "sales@brightview.com",
            "phone": "+1000000009"
        },
        "stock_description": {
            "product_id": "P009",
            "stock_quantity": 20,
            "expiry_date": "N/A",
            "critical_quantity": 7
        }
    },
    {
        "id": "P010",
        "product_name": "Wireless Router X5",
        "category": "Networking",
        "main_category": "Electronic",
        "brand": "NetWave",
        "product_image": "https://example.com/images/wireless_router_x5.jpg",
        "supplier": {
            "id": "S010",
            "name": "NetWave Networks",
            "email": "info@netwave.com",
            "phone": "+1000000010"
        },
        "stock_description": {
            "product_id": "P010",
            "stock_quantity": 35,
            "expiry_date": "N/A",
            "critical_quantity": 8
        }
    },
    {
        "id": "P011",
        "product_name": "Noise-Cancelling Headphones",
        "category": "Audio",
        "main_category": "Electronic",
        "brand": "QuietSound",
        "product_image": "https://example.com/images/noise_cancelling_headphones.jpg",
        "supplier": {
            "id": "S011",
            "name": "QuietSound Inc.",
            "email": "contact@quietsound.com",
            "phone": "+1000000011"
        },
        "stock_description": {
            "product_id": "P011",
            "stock_quantity": 45,
            "expiry_date": "N/A",
            "critical_quantity": 12
        }
    },
    {
        "id": "P012",
        "product_name": "Smart Refrigerator",
        "category": "Home Appliances",
        "main_category": "Electronic",
        "brand": "CoolTech",
        "product_image": "https://example.com/images/smart_refrigerator.jpg",
        "supplier": {
            "id": "S012",
            "name": "CoolTech Appliances",
            "email": "sales@cooltech.com",
            "phone": "+1000000012"
        },
        "stock_description": {
            "product_id": "P012",
            "stock_quantity": 10,
            "expiry_date": "N/A",
            "critical_quantity": 4
        }
    },
    {
        "id": "P013",
        "product_name": "Electric Kettle",
        "category": "Home Appliances",
        "main_category": "Electronic",
        "brand": "QuickBoil",
        "product_image": "https://example.com/images/electric_kettle.jpg",
        "supplier": {
            "id": "S013",
            "name": "QuickBoil Ltd.",
            "email": "contact@quickboil.com",
            "phone": "+1000000013"
        },
        "stock_description": {
            "product_id": "P013",
            "stock_quantity": 80,
            "expiry_date": "N/A",
            "critical_quantity": 15
        }
    },
    {
        "id": "P014",
        "product_name": "Digital Thermostat",
        "category": "Home Automation",
        "main_category": "Electronic",
        "brand": "SmartTemp",
        "product_image": "https://example.com/images/digital_thermostat.jpg",
        "supplier": {
            "id": "S014",
            "name": "SmartTemp Solutions",
            "email": "info@smarttemp.com",
            "phone": "+1000000014"
        },
        "stock_description": {
            "product_id": "P014",
            "stock_quantity": 25,
            "expiry_date": "N/A",
            "critical_quantity": 7
        }
    },
    {
        "id": "P015",
        "product_name": "Home Security Camera",
        "category": "Security",
        "main_category": "Electronic",
        "brand": "SafeGuard",
        "product_image": "https://example.com/images/home_security_camera.jpg",
        "supplier": {
            "id": "S015",
            "name": "SafeGuard Systems",
            "email": "support@safeguard.com",
            "phone": "+1000000015"
        },
        "stock_description": {
            "product_id": "P015",
            "stock_quantity": 40,
            "expiry_date": "N/A",
            "critical_quantity": 10
        }
    },
    {
        "id": "P016",
        "product_name": "Smart Light Bulbs",
        "category": "Lighting",
        "main_category": "Electronic",
        "brand": "BrightHome",
        "product_image": "https://example.com/images/smart_light_bulbs.jpg",
        "supplier": {
            "id": "S016",
            "name": "BrightHome Ltd.",
            "email": "info@brighthome.com",
            "phone": "+1000000016"
        },
        "stock_description": {
            "product_id": "P016",
            "stock_quantity": 150,
            "expiry_date": "N/A",
            "critical_quantity": 30
        }
    },
    {
        "id": "P017",
        "product_name": "Cordless Drill",
        "category": "Tools",
        "main_category": "Electronic",
        "brand": "PowerTools",
        "product_image": "https://example.com/images/cordless_drill.jpg",
        "supplier": {
            "id": "S017",
            "name": "PowerTools Inc.",
            "email": "contact@powertools.com",
            "phone": "+1000000017"
        },
        "stock_description": {
            "product_id": "P017",
            "stock_quantity": 35,
            "expiry_date": "N/A",
            "critical_quantity": 10
        }
    },
    {
        "id": "P018",
        "product_name": "Electric Shaver",
        "category": "Personal Care",
        "main_category": "Electronic",
        "brand": "SmoothShave",
        "product_image": "https://example.com/images/electric_shaver.jpg",
        "supplier": {
            "id": "S018",
            "name": "SmoothShave Ltd.",
            "email": "info@smoothshave.com",
            "phone": "+1000000018"
        },
        "stock_description": {
            "product_id": "P018",
            "stock_quantity": 60,
            "expiry_date": "N/A",
            "critical_quantity": 15
        }
    },
    {
        "id": "P019",
        "product_name": "Electric Toothbrush",
        "category": "Personal Care",
        "main_category": "Electronic",
        "brand": "BrightSmile",
        "product_image": "https://example.com/images/electric_toothbrush.jpg",
        "supplier": {
            "id": "S019",
            "name": "BrightSmile Inc.",
            "email": "contact@brightsmile.com",
            "phone": "+1000000019"
        },
        "stock_description": {
            "product_id": "P019",
            "stock_quantity": 80,
            "expiry_date": "N/A",
            "critical_quantity": 20
        }
    },
    {
        "id": "P020",
        "product_name": "Air Purifier",
        "category": "Home Appliances",
        "main_category": "Electronic",
        "brand": "PureAir",
        "product_image": "https://example.com/images/air_purifier.jpg",
        "supplier": {
            "id": "S020",
            "name": "PureAir Technologies",
            "email": "sales@pureair.com",
            "phone": "+1000000020"
        },
        "stock_description": {
            "product_id": "P020",
            "stock_quantity": 25,
            "expiry_date": "N/A",
            "critical_quantity": 8
        }
    },
    {
        "id": "P021",
        "product_name": "Smart Door Lock",
        "category": "Security",
        "main_category": "Electronic",
        "brand": "SecureHome",
        "product_image": "https://example.com/images/smart_door_lock.jpg",
        "supplier": {
            "id": "S021",
            "name": "SecureHome Ltd.",
            "email": "contact@securehome.com",
            "phone": "+1000000021"
        },
        "stock_description": {
            "product_id": "P021",
            "stock_quantity": 15,
            "expiry_date": "N/A",
            "critical_quantity": 5
        }
    },
    {
        "id": "P022",
        "product_name": "Electric Blanket",
        "category": "Home Appliances",
        "main_category": "Electronic",
        "brand": "WarmUp",
        "product_image": "https://example.com/images/electric_blanket.jpg",
        "supplier": {
            "id": "S022",
            "name": "WarmUp Solutions",
            "email": "info@warmup.com",
            "phone": "+1000000022"
        },
        "stock_description": {
            "product_id": "P022",
            "stock_quantity": 40,
            "expiry_date": "N/A",
            "critical_quantity": 12
        }
    },
    {
        "id": "P023",
        "product_name": "Digital Photo Frame",
        "category": "Home Decor",
        "main_category": "Electronic",
        "brand": "FrameTech",
        "product_image": "https://example.com/images/digital_photo_frame.jpg",
        "supplier": {
            "id": "S023",
            "name": "FrameTech Ltd.",
            "email": "support@frametech.com",
            "phone": "+1000000023"
        },
        "stock_description": {
            "product_id": "P023",
            "stock_quantity": 30,
            "expiry_date": "N/A",
            "critical_quantity": 8
        }
    },
    {
        "id": "P024",
        "product_name": "High-Quality Printer",
        "category": "Office Equipment",
        "main_category": "Electronic",
        "brand": "PrintMaster",
        "product_image": "https://example.com/images/high_quality_printer.jpg",
        "supplier": {
            "id": "S024",
            "name": "PrintMaster Corp.",
            "email": "info@printmaster.com",
            "phone": "+1000000024"
        },
        "stock_description": {
            "product_id": "P024",
            "stock_quantity": 22,
            "expiry_date": "N/A",
            "critical_quantity": 6
        }
    },
    {
        "id": "P025",
        "product_name": "Smart Air Conditioner",
        "category": "Home Appliances",
        "main_category": "Electronic",
        "brand": "CoolBreeze",
        "product_image": "https://example.com/images/smart_air_conditioner.jpg",
        "supplier": {
            "id": "S025",
            "name": "CoolBreeze Ltd.",
            "email": "sales@coolbreeze.com",
            "phone": "+1000000025"
        },
        "stock_description": {
            "product_id": "P025",
            "stock_quantity": 10,
            "expiry_date": "N/A",
            "critical_quantity": 4
        }
    },
    {
        "id": "P026",
        "product_name": "Electric Oven",
        "category": "Home Appliances",
        "main_category": "Electronic",
        "brand": "HeatMaster",
        "product_image": "https://example.com/images/electric_oven.jpg",
        "supplier": {
            "id": "S026",
            "name": "HeatMaster Co.",
            "email": "contact@heatmaster.com",
            "phone": "+1000000026"
        },
        "stock_description": {
            "product_id": "P026",
            "stock_quantity": 15,
            "expiry_date": "N/A",
            "critical_quantity": 5
        }
    },
    {
        "id": "P027",
        "product_name": "Smart Thermostat",
        "category": "Home Automation",
        "main_category": "Electronic",
        "brand": "TempControl",
        "product_image": "https://example.com/images/smart_thermostat.jpg",
        "supplier": {
            "id": "S027",
            "name": "TempControl Ltd.",
            "email": "info@tempcontrol.com",
            "phone": "+1000000027"
        },
        "stock_description": {
            "product_id": "P027",
            "stock_quantity": 25,
            "expiry_date": "N/A",
            "critical_quantity": 7
        }
    },
    {
        "id": "P028",
        "product_name": "Smart Microwave Oven",
        "category": "Home Appliances",
        "main_category": "Electronic",
        "brand": "QuickCook",
        "product_image": "https://example.com/images/smart_microwave_oven.jpg",
        "supplier": {
            "id": "S028",
            "name": "QuickCook Inc.",
            "email": "contact@quickcook.com",
            "phone": "+1000000028"
        },
        "stock_description": {
            "product_id": "P028",
            "stock_quantity": 20,
            "expiry_date": "N/A",
            "critical_quantity": 6
        }
    },
    {
        "id": "P029",
        "product_name": "Smart Washing Machine",
        "category": "Home Appliances",
        "main_category": "Electronic",
        "brand": "WashMaster",
        "product_image": "https://example.com/images/smart_washing_machine.jpg",
        "supplier": {
            "id": "S029",
            "name": "WashMaster Ltd.",
            "email": "support@washmaster.com",
            "phone": "+1000000029"
        },
        "stock_description": {
            "product_id": "P029",
            "stock_quantity": 12,
            "expiry_date": "N/A",
            "critical_quantity": 4
        }
    },
    {
        "id": "P030",
        "product_name": "Smart Air Purifier",
        "category": "Home Appliances",
        "main_category": "Electronic",
        "brand": "PureBreeze",
        "product_image": "https://example.com/images/smart_air_purifier.jpg",
        "supplier": {
            "id": "S030",
            "name": "PureBreeze Corp.",
            "email": "info@purebreeze.com",
            "phone": "+1000000030"
        },
        "stock_description": {
            "product_id": "P030",
            "stock_quantity": 28,
            "expiry_date": "N/A",
            "critical_quantity": 8
        }
    },
    {
        "id": "P031",
        "product_name": "Smart Coffee Maker",
        "category": "Home Appliances",
        "main_category": "Electronic",
        "brand": "BrewMaster",
        "product_image": "https://example.com/images/smart_coffee_maker.jpg",
        "supplier": {
            "id": "S031",
            "name": "BrewMaster Ltd.",
            "email": "contact@brewmaster.com",
            "phone": "+1000000031"
        },
        "stock_description": {
            "product_id": "P031",
            "stock_quantity": 40,
            "expiry_date": "N/A",
            "critical_quantity": 10
        }
    },
    {
        "id": "P032",
        "product_name": "Smart Speaker",
        "category": "Audio",
        "main_category": "Electronic",
        "brand": "EchoSound",
        "product_image": "https://example.com/images/smart_speaker.jpg",
        "supplier": {
            "id": "S032",
            "name": "EchoSound Ltd.",
            "email": "info@echosound.com",
            "phone": "+1000000032"
        },
        "stock_description": {
            "product_id": "P032",
            "stock_quantity": 65,
            "expiry_date": "N/A",
            "critical_quantity": 15
        }
    },
    {
        "id": "P033",
        "product_name": "Smart Blinds",
        "category": "Home Automation",
        "main_category": "Electronic",
        "brand": "ShadeControl",
        "product_image": "https://example.com/images/smart_blinds.jpg",
        "supplier": {
            "id": "S033",
            "name": "ShadeControl Inc.",
            "email": "contact@shadecontrol.com",
            "phone": "+1000000033"
        },
        "stock_description": {
            "product_id": "P033",
            "stock_quantity": 22,
            "expiry_date": "N/A",
            "critical_quantity": 6
        }
    },
    {
        "id": "P034",
        "product_name": "Digital Alarm Clock",
        "category": "Home Electronics",
        "main_category": "Electronic",
        "brand": "TimeMaster",
        "product_image": "https://example.com/images/digital_alarm_clock.jpg",
        "supplier": {
            "id": "S034",
            "name": "TimeMaster Ltd.",
            "email": "info@timemaster.com",
            "phone": "+1000000034"
        },
        "stock_description": {
            "product_id": "P034",
            "stock_quantity": 75,
            "expiry_date": "N/A",
            "critical_quantity": 20
        }
    },
    {
        "id": "P035",
        "product_name": "Smart Vacuum Cleaner",
        "category": "Home Appliances",
        "main_category": "Electronic",
        "brand": "CleanTech",
        "product_image": "https://example.com/images/smart_vacuum_cleaner.jpg",
        "supplier": {
            "id": "S035",
            "name": "CleanTech Ltd.",
            "email": "support@cleantech.com",
            "phone": "+1000000035"
        },
        "stock_description": {
            "product_id": "P035",
            "stock_quantity": 18,
            "expiry_date": "N/A",
            "critical_quantity": 5
        }
    },
    {
        "id": "P036",
        "product_name": "Smart Heater",
        "category": "Home Appliances",
        "main_category": "Electronic",
        "brand": "HeatWave",
        "product_image": "https://example.com/images/smart_heater.jpg",
        "supplier": {
            "id": "S036",
            "name": "HeatWave Corp.",
            "email": "info@heatwave.com",
            "phone": "+1000000036"
        },
        "stock_description": {
            "product_id": "P036",
            "stock_quantity": 12,
            "expiry_date": "N/A",
            "critical_quantity": 4
        }
    },
    {
        "id": "P037",
        "product_name": "Digital Music Player",
        "category": "Audio",
        "main_category": "Electronic",
        "brand": "TuneTech",
        "product_image": "https://example.com/images/digital_music_player.jpg",
        "supplier": {
            "id": "S037",
            "name": "TuneTech Ltd.",
            "email": "support@tunetech.com",
            "phone": "+1000000037"
        },
        "stock_description": {
            "product_id": "P037",
            "stock_quantity": 30,
            "expiry_date": "N/A",
            "critical_quantity": 8
        }
    },
    {
        "id": "P038",
        "product_name": "Smart Security System",
        "category": "Security",
        "main_category": "Electronic",
        "brand": "SafeGuard",
        "product_image": "https://example.com/images/smart_security_system.jpg",
        "supplier": {
            "id": "S038",
            "name": "SafeGuard Ltd.",
            "email": "info@safeguard.com",
            "phone": "+1000000038"
        },
        "stock_description": {
            "product_id": "P038",
            "stock_quantity": 22,
            "expiry_date": "N/A",
            "critical_quantity": 6
        }
    },
    {
        "id": "P039",
        "product_name": "Smart Pet Feeder",
        "category": "Pet Supplies",
        "main_category": "Electronic",
        "brand": "PetTech",
        "product_image": "https://example.com/images/smart_pet_feeder.jpg",
        "supplier": {
            "id": "S039",
            "name": "PetTech Solutions",
            "email": "contact@pettech.com",
            "phone": "+1000000039"
        },
        "stock_description": {
            "product_id": "P039",
            "stock_quantity": 40,
            "expiry_date": "N/A",
            "critical_quantity": 10
        }
    },
    {
        "id": "P040",
        "product_name": "Smart Window Blinds",
        "category": "Home Automation",
        "main_category": "Electronic",
        "brand": "ShadeTech",
        "product_image": "https://example.com/images/smart_window_blinds.jpg",
        "supplier": {
            "id": "S040",
            "name": "ShadeTech Ltd.",
            "email": "info@shadetech.com",
            "phone": "+1000000040"
        },
        "stock_description": {
            "product_id": "P040",
            "stock_quantity": 25,
            "expiry_date": "N/A",
            "critical_quantity": 7
        }
    },
    {
        "id": "P041",
        "product_name": "Smart Plugs",
        "category": "Home Automation",
        "main_category": "Electronic",
        "brand": "SmartPower",
        "product_image": "https://example.com/images/smart_plugs.jpg",
        "supplier": {
            "id": "S041",
            "name": "SmartPower Ltd.",
            "email": "contact@smartpower.com",
            "phone": "+1000000041"
        },
        "stock_description": {
            "product_id": "P041",
            "stock_quantity": 50,
            "expiry_date": "N/A",
            "critical_quantity": 12
        }
    },
    {
        "id": "P001",
        "product_name": "Leather Jacket",
        "category": "Outerwear",
        "main_category": "Fashion",
        "brand": "UrbanWear",
        "product_image": "https://example.com/images/leather_jacket.jpg",
        "supplier": {
            "id": "S001",
            "name": "UrbanWear Co.",
            "email": "info@urbanwear.com",
            "phone": "+1000000001"
        },
        "stock_description": {
            "product_id": "P001",
            "stock_quantity": 50,
            "expiry_date": "N/A",
            "critical_quantity": 10
        }
    },
    {
        "id": "P002",
        "product_name": "Denim Jeans",
        "category": "Pants",
        "main_category": "Fashion",
        "brand": "DenimPro",
        "product_image": "https://example.com/images/denim_jeans.jpg",
        "supplier": {
            "id": "S002",
            "name": "DenimPro Inc.",
            "email": "contact@denimpro.com",
            "phone": "+1000000002"
        },
        "stock_description": {
            "product_id": "P002",
            "stock_quantity": 100,
            "expiry_date": "N/A",
            "critical_quantity": 20
        }
    },
    {
        "id": "P003",
        "product_name": "Silk Scarf",
        "category": "Accessories",
        "main_category": "Fashion",
        "brand": "LuxStyle",
        "product_image": "https://example.com/images/silk_scarf.jpg",
        "supplier": {
            "id": "S003",
            "name": "LuxStyle Ltd.",
            "email": "sales@luxstyle.com",
            "phone": "+1000000003"
        },
        "stock_description": {
            "product_id": "P003",
            "stock_quantity": 75,
            "expiry_date": "N/A",
            "critical_quantity": 15
        }
    },
    {
        "id": "P004",
        "product_name": "Running Shoes",
        "category": "Footwear",
        "main_category": "Fashion",
        "brand": "FitTrack",
        "product_image": "https://example.com/images/running_shoes.jpg",
        "supplier": {
            "id": "S004",
            "name": "FitTrack Sports",
            "email": "support@fittrack.com",
            "phone": "+1000000004"
        },
        "stock_description": {
            "product_id": "P004",
            "stock_quantity": 60,
            "expiry_date": "N/A",
            "critical_quantity": 12
        }
    },
    {
        "id": "P005",
        "product_name": "Wool Sweater",
        "category": "Knitwear",
        "main_category": "Fashion",
        "brand": "CozyWear",
        "product_image": "https://example.com/images/wool_sweater.jpg",
        "supplier": {
            "id": "S005",
            "name": "CozyWear Ltd.",
            "email": "info@cozywear.com",
            "phone": "+1000000005"
        },
        "stock_description": {
            "product_id": "P005",
            "stock_quantity": 30,
            "expiry_date": "N/A",
            "critical_quantity": 8
        }
    },
    {
        "id": "P006",
        "product_name": "Sunglasses",
        "category": "Accessories",
        "main_category": "Fashion",
        "brand": "SunShade",
        "product_image": "https://example.com/images/sunglasses.jpg",
        "supplier": {
            "id": "S006",
            "name": "SunShade Ltd.",
            "email": "contact@sunshade.com",
            "phone": "+1000000006"
        },
        "stock_description": {
            "product_id": "P006",
            "stock_quantity": 120,
            "expiry_date": "N/A",
            "critical_quantity": 25
        }
    },
    {
        "id": "P007",
        "product_name": "Button-Down Shirt",
        "category": "Shirts",
        "main_category": "Fashion",
        "brand": "SharpDress",
        "product_image": "https://example.com/images/button_down_shirt.jpg",
        "supplier": {
            "id": "S007",
            "name": "SharpDress Co.",
            "email": "sales@sharpdress.com",
            "phone": "+1000000007"
        },
        "stock_description": {
            "product_id": "P007",
            "stock_quantity": 80,
            "expiry_date": "N/A",
            "critical_quantity": 18
        }
    },
    {
        "id": "P008",
        "product_name": "Formal Trousers",
        "category": "Pants",
        "main_category": "Fashion",
        "brand": "EliteWear",
        "product_image": "https://example.com/images/formal_trousers.jpg",
        "supplier": {
            "id": "S008",
            "name": "EliteWear Ltd.",
            "email": "info@elitewear.com",
            "phone": "+1000000008"
        },
        "stock_description": {
            "product_id": "P008",
            "stock_quantity": 40,
            "expiry_date": "N/A",
            "critical_quantity": 10
        }
    },
    {
        "id": "P009",
        "product_name": "Summer Dress",
        "category": "Dresses",
        "main_category": "Fashion",
        "brand": "SunnyStyle",
        "product_image": "https://example.com/images/summer_dress.jpg",
        "supplier": {
            "id": "S009",
            "name": "SunnyStyle Co.",
            "email": "contact@sunnystyle.com",
            "phone": "+1000000009"
        },
        "stock_description": {
            "product_id": "P009",
            "stock_quantity": 90,
            "expiry_date": "N/A",
            "critical_quantity": 20
        }
    },
    {
        "id": "P010",
        "product_name": "Trench Coat",
        "category": "Outerwear",
        "main_category": "Fashion",
        "brand": "ClassicWear",
        "product_image": "https://example.com/images/trench_coat.jpg",
        "supplier": {
            "id": "S010",
            "name": "ClassicWear Ltd.",
            "email": "info@classicwear.com",
            "phone": "+1000000010"
        },
        "stock_description": {
            "product_id": "P010",
            "stock_quantity": 20,
            "expiry_date": "N/A",
            "critical_quantity": 5
        }
    },
    {
        "id": "P011",
        "product_name": "Leather Belt",
        "category": "Accessories",
        "main_category": "Fashion",
        "brand": "BeltCraft",
        "product_image": "https://example.com/images/leather_belt.jpg",
        "supplier": {
            "id": "S011",
            "name": "BeltCraft Inc.",
            "email": "support@beltcraft.com",
            "phone": "+1000000011"
        },
        "stock_description": {
            "product_id": "P011",
            "stock_quantity": 55,
            "expiry_date": "N/A",
            "critical_quantity": 12
        }
    },
    {
        "id": "P012",
        "product_name": "Winter Boots",
        "category": "Footwear",
        "main_category": "Fashion",
        "brand": "SnowWalk",
        "product_image": "https://example.com/images/winter_boots.jpg",
        "supplier": {
            "id": "S012",
            "name": "SnowWalk Ltd.",
            "email": "contact@snowwalk.com",
            "phone": "+1000000012"
        },
        "stock_description": {
            "product_id": "P012",
            "stock_quantity": 35,
            "expiry_date": "N/A",
            "critical_quantity": 8
        }
    },
    {
        "id": "P013",
        "product_name": "Cotton T-Shirt",
        "category": "T-Shirts",
        "main_category": "Fashion",
        "brand": "CottonFit",
        "product_image": "https://example.com/images/cotton_tshirt.jpg",
        "supplier": {
            "id": "S013",
            "name": "CottonFit Inc.",
            "email": "info@cottonfit.com",
            "phone": "+1000000013"
        },
        "stock_description": {
            "product_id": "P013",
            "stock_quantity": 150,
            "expiry_date": "N/A",
            "critical_quantity": 30
        }
    },
    {
        "id": "P014",
        "product_name": "Cashmere Sweater",
        "category": "Knitwear",
        "main_category": "Fashion",
        "brand": "CashmereLux",
        "product_image": "https://example.com/images/cashmere_sweater.jpg",
        "supplier": {
            "id": "S014",
            "name": "CashmereLux Ltd.",
            "email": "support@cashmerelux.com",
            "phone": "+1000000014"
        },
        "stock_description": {
            "product_id": "P014",
            "stock_quantity": 45,
            "expiry_date": "N/A",
            "critical_quantity": 9
        }
    },
    {
        "id": "P015",
        "product_name": "Casual Shorts",
        "category": "Shorts",
        "main_category": "Fashion",
        "brand": "EasyWear",
        "product_image": "https://example.com/images/casual_shorts.jpg",
        "supplier": {
            "id": "S015",
            "name": "EasyWear Inc.",
            "email": "contact@easywear.com",
            "phone": "+1000000015"
        },
        "stock_description": {
            "product_id": "P015",
            "stock_quantity": 80,
            "expiry_date": "N/A",
            "critical_quantity": 18
        }
    },
    {
        "id": "P016",
        "product_name": "Bow Tie",
        "category": "Accessories",
        "main_category": "Fashion",
        "brand": "ElegantTie",
        "product_image": "https://example.com/images/bow_tie.jpg",
        "supplier": {
            "id": "S016",
            "name": "ElegantTie Ltd.",
            "email": "sales@eleganttie.com",
            "phone": "+1000000016"
        },
        "stock_description": {
            "product_id": "P016",
            "stock_quantity": 25,
            "expiry_date": "N/A",
            "critical_quantity": 5
        }
    },
    {
        "id": "P017",
        "product_name": "Straw Hat",
        "category": "Hats",
        "main_category": "Fashion",
        "brand": "SummerShade",
        "product_image": "https://example.com/images/straw_hat.jpg",
        "supplier": {
            "id": "S017",
            "name": "SummerShade Co.",
            "email": "info@summershade.com",
            "phone": "+1000000017"
        },
        "stock_description": {
            "product_id": "P017",
            "stock_quantity": 60,
            "expiry_date": "N/A",
            "critical_quantity": 12
        }
    },
    {
        "id": "P018",
        "product_name": "Fleece Jacket",
        "category": "Outerwear",
        "main_category": "Fashion",
        "brand": "WarmUp",
        "product_image": "https://example.com/images/fleece_jacket.jpg",
        "supplier": {
            "id": "S018",
            "name": "WarmUp Ltd.",
            "email": "support@warmup.com",
            "phone": "+1000000018"
        },
        "stock_description": {
            "product_id": "P018",
            "stock_quantity": 40,
            "expiry_date": "N/A",
            "critical_quantity": 10
        }
    },
    {
        "id": "P019",
        "product_name": "Graphic Hoodie",
        "category": "Hoodies",
        "main_category": "Fashion",
        "brand": "TrendHood",
        "product_image": "https://example.com/images/graphic_hoodie.jpg",
        "supplier": {
            "id": "S019",
            "name": "TrendHood Ltd.",
            "email": "contact@trendhood.com",
            "phone": "+1000000019"
        },
        "stock_description": {
            "product_id": "P019",
            "stock_quantity": 70,
            "expiry_date": "N/A",
            "critical_quantity": 15
        }
    },
    {
        "id": "P020",
        "product_name": "Patterned Socks",
        "category": "Socks",
        "main_category": "Fashion",
        "brand": "SockStyle",
        "product_image": "https://example.com/images/patterned_socks.jpg",
        "supplier": {
            "id": "S020",
            "name": "SockStyle Ltd.",
            "email": "info@sockstyle.com",
            "phone": "+1000000020"
        },
        "stock_description": {
            "product_id": "P020",
            "stock_quantity": 150,
            "expiry_date": "N/A",
            "critical_quantity": 30
        }
    },
    {
        "id": "P001",
        "product_name": "Organic Face Cream",
        "category": "Skincare",
        "main_category": "Beauty",
        "brand": "GlowNaturals",
        "product_image": "https://example.com/images/organic_face_cream.jpg",
        "supplier": {
            "id": "S001",
            "name": "GlowNaturals Ltd.",
            "email": "contact@glownaturals.com",
            "phone": "+1000000001"
        },
        "stock_description": {
            "product_id": "P001",
            "stock_quantity": 30,
            "expiry_date": "2025-12-31",
            "critical_quantity": 5
        }
    },
    {
        "id": "P002",
        "product_name": "Moisturizing Lip Balm",
        "category": "Lip Care",
        "main_category": "Beauty",
        "brand": "SmoothLips",
        "product_image": "https://example.com/images/moisturizing_lip_balm.jpg",
        "supplier": {
            "id": "S002",
            "name": "SmoothLips Inc.",
            "email": "support@smoothlips.com",
            "phone": "+1000000002"
        },
        "stock_description": {
            "product_id": "P002",
            "stock_quantity": 50,
            "expiry_date": "2024-11-30",
            "critical_quantity": 10
        }
    },
    {
        "id": "P003",
        "product_name": "Vitamin C Serum",
        "category": "Serum",
        "main_category": "Beauty",
        "brand": "PureSkin",
        "product_image": "https://example.com/images/vitamin_c_serum.jpg",
        "supplier": {
            "id": "S003",
            "name": "PureSkin LLC",
            "email": "info@pureskin.com",
            "phone": "+1000000003"
        },
        "stock_description": {
            "product_id": "P003",
            "stock_quantity": 25,
            "expiry_date": "2024-09-15",
            "critical_quantity": 8
        }
    },
    {
        "id": "P004",
        "product_name": "Gourmet Olive Oil",
        "category": "Oils",
        "main_category": "Food",
        "brand": "OliveGold",
        "product_image": "https://example.com/images/gourmet_olive_oil.jpg",
        "supplier": {
            "id": "S004",
            "name": "OliveGold Ltd.",
            "email": "sales@olivegold.com",
            "phone": "+1000000004"
        },
        "stock_description": {
            "product_id": "P004",
            "stock_quantity": 40,
            "expiry_date": "2025-08-20",
            "critical_quantity": 10
        }
    },
    {
        "id": "P005",
        "product_name": "Organic Green Tea",
        "category": "Beverages",
        "main_category": "Food",
        "brand": "TeaLeaf",
        "product_image": "https://example.com/images/organic_green_tea.jpg",
        "supplier": {
            "id": "S005",
            "name": "TeaLeaf Co.",
            "email": "contact@tealeaf.com",
            "phone": "+1000000005"
        },
        "stock_description": {
            "product_id": "P005",
            "stock_quantity": 75,
            "expiry_date": "2024-12-31",
            "critical_quantity": 15
        }
    },
    {
        "id": "P006",
        "product_name": "Artisan Bread Mix",
        "category": "Baking Supplies",
        "main_category": "Food",
        "brand": "BakeArt",
        "product_image": "https://example.com/images/artisan_bread_mix.jpg",
        "supplier": {
            "id": "S006",
            "name": "BakeArt Ltd.",
            "email": "info@bakeart.com",
            "phone": "+1000000006"
        },
        "stock_description": {
            "product_id": "P006",
            "stock_quantity": 60,
            "expiry_date": "2024-10-15",
            "critical_quantity": 12
        }
    },
    {
        "id": "P007",
        "product_name": "Children's Puzzle",
        "category": "Toys",
        "main_category": "Toys",
        "brand": "PuzzlePlay",
        "product_image": "https://example.com/images/childrens_puzzle.jpg",
        "supplier": {
            "id": "S007",
            "name": "PuzzlePlay Inc.",
            "email": "support@puzzleplay.com",
            "phone": "+1000000007"
        },
        "stock_description": {
            "product_id": "P007",
            "stock_quantity": 100,
            "expiry_date": "N/A",
            "critical_quantity": 20
        }
    },
    {
        "id": "P008",
        "product_name": "Stuffed Animal Toy",
        "category": "Stuffed Animals",
        "main_category": "Toys",
        "brand": "CuddlyToys",
        "product_image": "https://example.com/images/stuffed_animal_toy.jpg",
        "supplier": {
            "id": "S008",
            "name": "CuddlyToys Ltd.",
            "email": "contact@cuddlytoys.com",
            "phone": "+1000000008"
        },
        "stock_description": {
            "product_id": "P008",
            "stock_quantity": 150,
            "expiry_date": "N/A",
            "critical_quantity": 30
        }
    },
    {
        "id": "P009",
        "product_name": "Wooden Building Blocks",
        "category": "Building Toys",
        "main_category": "Toys",
        "brand": "BuildMaster",
        "product_image": "https://example.com/images/wooden_building_blocks.jpg",
        "supplier": {
            "id": "S009",
            "name": "BuildMaster Ltd.",
            "email": "info@buildmaster.com",
            "phone": "+1000000009"
        },
        "stock_description": {
            "product_id": "P009",
            "stock_quantity": 80,
            "expiry_date": "N/A",
            "critical_quantity": 15
        }
    },
    {
        "id": "P010",
        "product_name": "Face Mask Set",
        "category": "Skincare",
        "main_category": "Beauty",
        "brand": "FreshFace",
        "product_image": "https://example.com/images/face_mask_set.jpg",
        "supplier": {
            "id": "S010",
            "name": "FreshFace Co.",
            "email": "support@freshface.com",
            "phone": "+1000000010"
        },
        "stock_description": {
            "product_id": "P010",
            "stock_quantity": 40,
            "expiry_date": "2025-06-30",
            "critical_quantity": 8
        }
    },
    {
        "id": "P011",
        "product_name": "Gourmet Coffee Beans",
        "category": "Coffee",
        "main_category": "Food",
        "brand": "BrewMaster",
        "product_image": "https://example.com/images/gourmet_coffee_beans.jpg",
        "supplier": {
            "id": "S011",
            "name": "BrewMaster Ltd.",
            "email": "contact@brewmaster.com",
            "phone": "+1000000011"
        },
        "stock_description": {
            "product_id": "P011",
            "stock_quantity": 45,
            "expiry_date": "2025-01-15",
            "critical_quantity": 10
        }
    },
    {
        "id": "P012",
        "product_name": "Baby Doll",
        "category": "Dolls",
        "main_category": "Toys",
        "brand": "DollHouse",
        "product_image": "https://example.com/images/baby_doll.jpg",
        "supplier": {
            "id": "S012",
            "name": "DollHouse Ltd.",
            "email": "info@dollhouse.com",
            "phone": "+1000000012"
        },
        "stock_description": {
            "product_id": "P012",
            "stock_quantity": 70,
            "expiry_date": "N/A",
            "critical_quantity": 15
        }
    },
    {
        "id": "P013",
        "product_name": "Organic Lipstick",
        "category": "Lip Care",
        "main_category": "Beauty",
        "brand": "EcoBeauty",
        "product_image": "https://example.com/images/organic_lipstick.jpg",
        "supplier": {
            "id": "S013",
            "name": "EcoBeauty Inc.",
            "email": "contact@ecobeauty.com",
            "phone": "+1000000013"
        },
        "stock_description": {
            "product_id": "P013",
            "stock_quantity": 60,
            "expiry_date": "2024-12-01",
            "critical_quantity": 10
        }
    },
    {
        "id": "P014",
        "product_name": "Herbal Tea",
        "category": "Beverages",
        "main_category": "Food",
        "brand": "HerbInfuse",
        "product_image": "https://example.com/images/herbal_tea.jpg",
        "supplier": {
            "id": "S014",
            "name": "HerbInfuse Ltd.",
            "email": "info@herbinfuse.com",
            "phone": "+1000000014"
        },
        "stock_description": {
            "product_id": "P014",
            "stock_quantity": 65,
            "expiry_date": "2024-11-30",
            "critical_quantity": 12
        }
    },
    {
        "id": "P015",
        "product_name": "Educational Toy Set",
        "category": "Educational Toys",
        "main_category": "Toys",
        "brand": "LearnPlay",
        "product_image": "https://example.com/images/educational_toy_set.jpg",
        "supplier": {
            "id": "S015",
            "name": "LearnPlay Ltd.",
            "email": "support@learnplay.com",
            "phone": "+1000000015"
        },
        "stock_description": {
            "product_id": "P015",
            "stock_quantity": 55,
            "expiry_date": "N/A",
            "critical_quantity": 10
        }
    },
    {
        "id": "P016",
        "product_name": "Anti-Aging Cream",
        "category": "Skincare",
        "main_category": "Beauty",
        "brand": "YouthfulSkin",
        "product_image": "https://example.com/images/anti_aging_cream.jpg",
        "supplier": {
            "id": "S016",
            "name": "YouthfulSkin Ltd.",
            "email": "info@youthfulskin.com",
            "phone": "+1000000016"
        },
        "stock_description": {
            "product_id": "P016",
            "stock_quantity": 20,
            "expiry_date": "2025-03-15",
            "critical_quantity": 5
        }
    },
    {
        "id": "P017",
        "product_name": "Spaghetti Pasta",
        "category": "Pasta",
        "main_category": "Food",
        "brand": "PastaDelight",
        "product_image": "https://example.com/images/spaghetti_pasta.jpg",
        "supplier": {
            "id": "S017",
            "name": "PastaDelight Co.",
            "email": "contact@pastadelight.com",
            "phone": "+1000000017"
        },
        "stock_description": {
            "product_id": "P017",
            "stock_quantity": 120,
            "expiry_date": "2025-06-30",
            "critical_quantity": 25
        }
    },
    {
        "id": "P018",
        "product_name": "Luxury Bath Set",
        "category": "Bath Products",
        "main_category": "Beauty",
        "brand": "LuxBath",
        "product_image": "https://example.com/images/luxury_bath_set.jpg",
        "supplier": {
            "id": "S018",
            "name": "LuxBath Ltd.",
            "email": "support@luxbath.com",
            "phone": "+1000000018"
        },
        "stock_description": {
            "product_id": "P018",
            "stock_quantity": 35,
            "expiry_date": "2024-08-20",
            "critical_quantity": 7
        }
    },
    {
        "id": "P019",
        "product_name": "Wooden Train Set",
        "category": "Railroad Toys",
        "main_category": "Toys",
        "brand": "TinyTracks",
        "product_image": "https://example.com/images/wooden_train_set.jpg",
        "supplier": {
            "id": "S019",
            "name": "TinyTracks Ltd.",
            "email": "info@tinytracks.com",
            "phone": "+1000000019"
        },
        "stock_description": {
            "product_id": "P019",
            "stock_quantity": 90,
            "expiry_date": "N/A",
            "critical_quantity": 18
        }
    },
    {
        "id": "P020",
        "product_name": "Fruit Jam",
        "category": "Spreads",
        "main_category": "Food",
        "brand": "JamTime",
        "product_image": "https://example.com/images/fruit_jam.jpg",
        "supplier": {
            "id": "S020",
            "name": "JamTime Ltd.",
            "email": "contact@jamtime.com",
            "phone": "+1000000020"
        },
        "stock_description": {
            "product_id": "P020",
            "stock_quantity": 70,
            "expiry_date": "2025-02-28",
            "critical_quantity": 14
        }
    },
    {
        "id": "P001",
        "product_name": "Aspirin 500mg Tablets",
        "category": "Pain Relief",
        "main_category": "Pharmacy",
        "brand": "HealthCare",
        "product_image": "https://example.com/images/aspirin_500mg.jpg",
        "supplier": {
            "id": "S001",
            "name": "HealthCare Pharmaceuticals Ltd.",
            "email": "contact@healthcarepharma.com",
            "phone": "+1000000001"
        },
        "stock_description": {
            "product_id": "P001",
            "stock_quantity": 200,
            "expiry_date": "2025-05-01",
            "critical_quantity": 30
        }
    },
    {
        "id": "P002",
        "product_name": "Vitamin C 1000mg Capsules",
        "category": "Vitamins",
        "main_category": "Pharmacy",
        "brand": "NutriBoost",
        "product_image": "https://example.com/images/vitamin_c_1000mg.jpg",
        "supplier": {
            "id": "S002",
            "name": "NutriBoost Inc.",
            "email": "support@nutriboost.com",
            "phone": "+1000000002"
        },
        "stock_description": {
            "product_id": "P002",
            "stock_quantity": 150,
            "expiry_date": "2024-11-15",
            "critical_quantity": 25
        }
    },
    {
        "id": "P003",
        "product_name": "Allergy Relief Tablets",
        "category": "Allergy Relief",
        "main_category": "Pharmacy",
        "brand": "AllergyEase",
        "product_image": "https://example.com/images/allergy_relief_tablets.jpg",
        "supplier": {
            "id": "S003",
            "name": "AllergyEase Ltd.",
            "email": "info@allergyease.com",
            "phone": "+1000000003"
        },
        "stock_description": {
            "product_id": "P003",
            "stock_quantity": 80,
            "expiry_date": "2025-01-10",
            "critical_quantity": 20
        }
    },
    {
        "id": "P004",
        "product_name": "Cough Syrup 200ml",
        "category": "Cough & Cold",
        "main_category": "Pharmacy",
        "brand": "ClearBreath",
        "product_image": "https://example.com/images/cough_syrup_200ml.jpg",
        "supplier": {
            "id": "S004",
            "name": "ClearBreath Pharma",
            "email": "sales@clearbreath.com",
            "phone": "+1000000004"
        },
        "stock_description": {
            "product_id": "P004",
            "stock_quantity": 100,
            "expiry_date": "2024-07-30",
            "critical_quantity": 15
        }
    },
    {
        "id": "P005",
        "product_name": "Probiotic Supplement",
        "category": "Digestive Health",
        "main_category": "Pharmacy",
        "brand": "GutHealth",
        "product_image": "https://example.com/images/probiotic_supplement.jpg",
        "supplier": {
            "id": "S005",
            "name": "GutHealth Inc.",
            "email": "contact@guthealth.com",
            "phone": "+1000000005"
        },
        "stock_description": {
            "product_id": "P005",
            "stock_quantity": 90,
            "expiry_date": "2025-03-01",
            "critical_quantity": 20
        }
    },
    {
        "id": "P006",
        "product_name": "Antibiotic Ointment 30g",
        "category": "First Aid",
        "main_category": "Pharmacy",
        "brand": "MediCare",
        "product_image": "https://example.com/images/antibiotic_ointment.jpg",
        "supplier": {
            "id": "S006",
            "name": "MediCare Pharmaceuticals",
            "email": "info@medicarepharma.com",
            "phone": "+1000000006"
        },
        "stock_description": {
            "product_id": "P006",
            "stock_quantity": 60,
            "expiry_date": "2024-09-15",
            "critical_quantity": 10
        }
    },
    {
        "id": "P007",
        "product_name": "Cold Relief Nasal Spray",
        "category": "Cold Relief",
        "main_category": "Pharmacy",
        "brand": "BreatheEasy",
        "product_image": "https://example.com/images/cold_relief_nasal_spray.jpg",
        "supplier": {
            "id": "S007",
            "name": "BreatheEasy Ltd.",
            "email": "support@breatheeasy.com",
            "phone": "+1000000007"
        },
        "stock_description": {
            "product_id": "P007",
            "stock_quantity": 70,
            "expiry_date": "2025-02-20",
            "critical_quantity": 12
        }
    },
    {
        "id": "P008",
        "product_name": "Pain Relief Gel 50g",
        "category": "Pain Relief",
        "main_category": "Pharmacy",
        "brand": "ReliefMax",
        "product_image": "https://example.com/images/pain_relief_gel.jpg",
        "supplier": {
            "id": "S008",
            "name": "ReliefMax Pharmaceuticals",
            "email": "contact@reliefmax.com",
            "phone": "+1000000008"
        },
        "stock_description": {
            "product_id": "P008",
            "stock_quantity": 85,
            "expiry_date": "2024-12-01",
            "critical_quantity": 15
        }
    },
    {
        "id": "P009",
        "product_name": "Multivitamin Tablets",
        "category": "Vitamins",
        "main_category": "Pharmacy",
        "brand": "VitaPlus",
        "product_image": "https://example.com/images/multivitamin_tablets.jpg",
        "supplier": {
            "id": "S009",
            "name": "VitaPlus Inc.",
            "email": "info@vitaplus.com",
            "phone": "+1000000009"
        },
        "stock_description": {
            "product_id": "P009",
            "stock_quantity": 120,
            "expiry_date": "2025-04-01",
            "critical_quantity": 20
        }
    },
    {
        "id": "P010",
        "product_name": "Skin Moisturizer 100ml",
        "category": "Skin Care",
        "main_category": "Pharmacy",
        "brand": "MoisturePlus",
        "product_image": "https://example.com/images/skin_moisturizer.jpg",
        "supplier": {
            "id": "S010",
            "name": "MoisturePlus Ltd.",
            "email": "contact@moistureplus.com",
            "phone": "+1000000010"
        },
        "stock_description": {
            "product_id": "P010",
            "stock_quantity": 55,
            "expiry_date": "2024-10-10",
            "critical_quantity": 10
        }
    },
    {
        "id": "P011",
        "product_name": "Sunscreen SPF 50",
        "category": "Sun Care",
        "main_category": "Pharmacy",
        "brand": "SunGuard",
        "product_image": "https://example.com/images/sunscreen_spf_50.jpg",
        "supplier": {
            "id": "S011",
            "name": "SunGuard Inc.",
            "email": "support@sunguard.com",
            "phone": "+1000000011"
        },
        "stock_description": {
            "product_id": "P011",
            "stock_quantity": 40,
            "expiry_date": "2024-05-20",
            "critical_quantity": 8
        }
    },
    {
        "id": "P012",
        "product_name": "Cold & Flu Relief Tablets",
        "category": "Cold & Flu",
        "main_category": "Pharmacy",
        "brand": "FluAway",
        "product_image": "https://example.com/images/cold_flu_relief_tablets.jpg",
        "supplier": {
            "id": "S012",
            "name": "FluAway Ltd.",
            "email": "info@fluaway.com",
            "phone": "+1000000012"
        },
        "stock_description": {
            "product_id": "P012",
            "stock_quantity": 90,
            "expiry_date": "2025-07-01",
            "critical_quantity": 15
        }
    },
    {
        "id": "P013",
        "product_name": "Antiseptic Wipes",
        "category": "First Aid",
        "main_category": "Pharmacy",
        "brand": "CleanCare",
        "product_image": "https://example.com/images/antiseptic_wipes.jpg",
        "supplier": {
            "id": "S013",
            "name": "CleanCare Ltd.",
            "email": "contact@cleancare.com",
            "phone": "+1000000013"
        },
        "stock_description": {
            "product_id": "P013",
            "stock_quantity": 150,
            "expiry_date": "2025-06-30",
            "critical_quantity": 20
        }
    },
    {
        "id": "P014",
        "product_name": "Eye Drops 10ml",
        "category": "Eye Care",
        "main_category": "Pharmacy",
        "brand": "VisionAid",
        "product_image": "https://example.com/images/eye_drops_10ml.jpg",
        "supplier": {
            "id": "S014",
            "name": "VisionAid Pharmaceuticals",
            "email": "support@visionaid.com",
            "phone": "+1000000014"
        },
        "stock_description": {
            "product_id": "P014",
            "stock_quantity": 70,
            "expiry_date": "2024-12-01",
            "critical_quantity": 12
        }
    },
    {
        "id": "P015",
        "product_name": "Joint Pain Relief Cream",
        "category": "Pain Relief",
        "main_category": "Pharmacy",
        "brand": "JointEase",
        "product_image": "https://example.com/images/joint_pain_relief_cream.jpg",
        "supplier": {
            "id": "S015",
            "name": "JointEase Ltd.",
            "email": "info@joinease.com",
            "phone": "+1000000015"
        },
        "stock_description": {
            "product_id": "P015",
            "stock_quantity": 65,
            "expiry_date": "2025-04-15",
            "critical_quantity": 10
        }
    },
    {
        "id": "P016",
        "product_name": "Menstrual Pain Relief Tablets",
        "category": "Pain Relief",
        "main_category": "Pharmacy",
        "brand": "ComfortRelief",
        "product_image": "https://example.com/images/menstrual_pain_relief_tablets.jpg",
        "supplier": {
            "id": "S016",
            "name": "ComfortRelief Inc.",
            "email": "support@comfortrelief.com",
            "phone": "+1000000016"
        },
        "stock_description": {
            "product_id": "P016",
            "stock_quantity": 85,
            "expiry_date": "2024-08-15",
            "critical_quantity": 15
        }
    },
    {
        "id": "P017",
        "product_name": "Anti-Nausea Medication",
        "category": "Digestive Health",
        "main_category": "Pharmacy",
        "brand": "NauseaRelief",
        "product_image": "https://example.com/images/anti_nausea_medication.jpg",
        "supplier": {
            "id": "S017",
            "name": "NauseaRelief Ltd.",
            "email": "contact@nausearelief.com",
            "phone": "+1000000017"
        },
        "stock_description": {
            "product_id": "P017",
            "stock_quantity": 90,
            "expiry_date": "2025-01-01",
            "critical_quantity": 20
        }
    },
    {
        "id": "P018",
        "product_name": "Heartburn Relief Tablets",
        "category": "Digestive Health",
        "main_category": "Pharmacy",
        "brand": "HeartEase",
        "product_image": "https://example.com/images/heartburn_relief_tablets.jpg",
        "supplier": {
            "id": "S018",
            "name": "HeartEase Inc.",
            "email": "support@heartease.com",
            "phone": "+1000000018"
        },
        "stock_description": {
            "product_id": "P018",
            "stock_quantity": 110,
            "expiry_date": "2025-05-01",
            "critical_quantity": 18
        }
    },
    {
        "id": "P019",
        "product_name": "Sleep Aid Tablets",
        "category": "Sleep Aids",
        "main_category": "Pharmacy",
        "brand": "SleepWell",
        "product_image": "https://example.com/images/sleep_aid_tablets.jpg",
        "supplier": {
            "id": "S019",
            "name": "SleepWell Ltd.",
            "email": "contact@sleepwell.com",
            "phone": "+1000000019"
        },
        "stock_description": {
            "product_id": "P019",
            "stock_quantity": 75,
            "expiry_date": "2024-12-01",
            "critical_quantity": 12
        }
    },
    {
        "id": "P020",
        "product_name": "Ear Drops 15ml",
        "category": "Ear Care",
        "main_category": "Pharmacy",
        "brand": "EarCare",
        "product_image": "https://example.com/images/ear_drops_15ml.jpg",
        "supplier": {
            "id": "S020",
            "name": "EarCare Pharmaceuticals",
            "email": "info@earcare.com",
            "phone": "+1000000020"
        },
        "stock_description": {
            "product_id": "P020",
            "stock_quantity": 65,
            "expiry_date": "2025-06-01",
            "critical_quantity": 10
        }
    },
    {
        "id": "P021",
        "product_name": "Antacid Tablets",
        "category": "Digestive Health",
        "main_category": "Pharmacy",
        "brand": "AntacidCo",
        "product_image": "https://example.com/images/antacid_tablets.jpg",
        "supplier": {
            "id": "S021",
            "name": "AntacidCo Ltd.",
            "email": "support@antacidco.com",
            "phone": "+1000000021"
        },
        "stock_description": {
            "product_id": "P021",
            "stock_quantity": 130,
            "expiry_date": "2025-02-01",
            "critical_quantity": 25
        }
    },
    {
        "id": "P022",
        "product_name": "Anti-Diarrheal Tablets",
        "category": "Digestive Health",
        "main_category": "Pharmacy",
        "brand": "StopDiarrhea",
        "product_image": "https://example.com/images/anti_diarrheal_tablets.jpg",
        "supplier": {
            "id": "S022",
            "name": "StopDiarrhea Inc.",
            "email": "info@stopdiarrhea.com",
            "phone": "+1000000022"
        },
        "stock_description": {
            "product_id": "P022",
            "stock_quantity": 85,
            "expiry_date": "2025-03-01",
            "critical_quantity": 15
        }
    },
    {
        "id": "P023",
        "product_name": "Nasal Decongestant Tablets",
        "category": "Cold Relief",
        "main_category": "Pharmacy",
        "brand": "Decongest",
        "product_image": "https://example.com/images/nasal_decongestant_tablets.jpg",
        "supplier": {
            "id": "S023",
            "name": "Decongest Ltd.",
            "email": "contact@decongest.com",
            "phone": "+1000000023"
        },
        "stock_description": {
            "product_id": "P023",
            "stock_quantity": 100,
            "expiry_date": "2024-08-01",
            "critical_quantity": 20
        }
    },
    {
        "id": "P024",
        "product_name": "Eye Relief Drops",
        "category": "Eye Care",
        "main_category": "Pharmacy",
        "brand": "ReliefEyes",
        "product_image": "https://example.com/images/eye_relief_drops.jpg",
        "supplier": {
            "id": "S024",
            "name": "ReliefEyes Inc.",
            "email": "info@reliefeyes.com",
            "phone": "+1000000024"
        },
        "stock_description": {
            "product_id": "P024",
            "stock_quantity": 80,
            "expiry_date": "2024-11-01",
            "critical_quantity": 15
        }
    },
    {
        "id": "P025",
        "product_name": "Hand Sanitizer 250ml",
        "category": "First Aid",
        "main_category": "Pharmacy",
        "brand": "SanitizePlus",
        "product_image": "https://example.com/images/hand_sanitizer_250ml.jpg",
        "supplier": {
            "id": "S025",
            "name": "SanitizePlus Ltd.",
            "email": "contact@sanitizeplus.com",
            "phone": "+1000000025"
        },
        "stock_description": {
            "product_id": "P025",
            "stock_quantity": 130,
            "expiry_date": "2025-07-01",
            "critical_quantity": 25
        }
    },
    {
        "id": "P026",
        "product_name": "Antifungal Cream 30g",
        "category": "Skin Care",
        "main_category": "Pharmacy",
        "brand": "FungalAway",
        "product_image": "https://example.com/images/antifungal_cream.jpg",
        "supplier": {
            "id": "S026",
            "name": "FungalAway Ltd.",
            "email": "info@fungalaway.com",
            "phone": "+1000000026"
        },
        "stock_description": {
            "product_id": "P026",
            "stock_quantity": 75,
            "expiry_date": "2025-03-01",
            "critical_quantity": 12
        }
    },
    {
        "id": "P027",
        "product_name": "Children's Cough Syrup 120ml",
        "category": "Cough & Cold",
        "main_category": "Pharmacy",
        "brand": "KidCough",
        "product_image": "https://example.com/images/childrens_cough_syrup.jpg",
        "supplier": {
            "id": "S027",
            "name": "KidCough Ltd.",
            "email": "contact@kidcough.com",
            "phone": "+1000000027"
        },
        "stock_description": {
            "product_id": "P027",
            "stock_quantity": 95,
            "expiry_date": "2024-10-01",
            "critical_quantity": 18
        }
    },
    {
        "id": "P028",
        "product_name": "Fever Reducer Tablets",
        "category": "Pain Relief",
        "main_category": "Pharmacy",
        "brand": "FeverAway",
        "product_image": "https://example.com/images/fever_reducer_tablets.jpg",
        "supplier": {
            "id": "S028",
            "name": "FeverAway Ltd.",
            "email": "info@feveraway.com",
            "phone": "+1000000028"
        },
        "stock_description": {
            "product_id": "P028",
            "stock_quantity": 70,
            "expiry_date": "2024-11-01",
            "critical_quantity": 10
        }
    },
    {
        "id": "P029",
        "product_name": "Wound Care Ointment 50g",
        "category": "First Aid",
        "main_category": "Pharmacy",
        "brand": "WoundCare",
        "product_image": "https://example.com/images/wound_care_ointment.jpg",
        "supplier": {
            "id": "S029",
            "name": "WoundCare Ltd.",
            "email": "contact@woundcare.com",
            "phone": "+1000000029"
        },
        "stock_description": {
            "product_id": "P029",
            "stock_quantity": 80,
            "expiry_date": "2025-02-01",
            "critical_quantity": 15
        }
    },
    {
        "id": "P030",
        "product_name": "Headache Relief Tablets",
        "category": "Pain Relief",
        "main_category": "Pharmacy",
        "brand": "HeadEase",
        "product_image": "https://example.com/images/headache_relief_tablets.jpg",
        "supplier": {
            "id": "S030",
            "name": "HeadEase Inc.",
            "email": "support@headease.com",
            "phone": "+1000000030"
        },
        "stock_description": {
            "product_id": "P030",
            "stock_quantity": 120,
            "expiry_date": "2025-06-01",
            "critical_quantity": 20
        }
    },
    {
        "id": "P031",
        "product_name": "Laxative Tablets",
        "category": "Digestive Health",
        "main_category": "Pharmacy",
        "brand": "LaxaEase",
        "product_image": "https://example.com/images/laxative_tablets.jpg",
        "supplier": {
            "id": "S031",
            "name": "LaxaEase Ltd.",
            "email": "info@laxaease.com",
            "phone": "+1000000031"
        },
        "stock_description": {
            "product_id": "P031",
            "stock_quantity": 90,
            "expiry_date": "2024-09-01",
            "critical_quantity": 15
        }
    },
    {
        "id": "P032",
        "product_name": "Toothache Relief Gel",
        "category": "Oral Care",
        "main_category": "Pharmacy",
        "brand": "ToothEase",
        "product_image": "https://example.com/images/toothache_relief_gel.jpg",
        "supplier": {
            "id": "S032",
            "name": "ToothEase Inc.",
            "email": "contact@toothease.com",
            "phone": "+1000000032"
        },
        "stock_description": {
            "product_id": "P032",
            "stock_quantity": 65,
            "expiry_date": "2025-01-01",
            "critical_quantity": 10
        }
    },
    {
        "id": "P033",
        "product_name": "Diabetes Test Strips",
        "category": "Diabetes Care",
        "main_category": "Pharmacy",
        "brand": "DiabetesCheck",
        "product_image": "https://example.com/images/diabetes_test_strips.jpg",
        "supplier": {
            "id": "S033",
            "name": "DiabetesCheck Ltd.",
            "email": "support@diabetescheck.com",
            "phone": "+1000000033"
        },
        "stock_description": {
            "product_id": "P033",
            "stock_quantity": 150,
            "expiry_date": "2025-08-01",
            "critical_quantity": 25
        }
    },
    {
        "id": "P034",
        "product_name": "Cough Drops",
        "category": "Cough & Cold",
        "main_category": "Pharmacy",
        "brand": "CoughRelief",
        "product_image": "https://example.com/images/cough_drops.jpg",
        "supplier": {
            "id": "S034",
            "name": "CoughRelief Inc.",
            "email": "contact@coughrelief.com",
            "phone": "+1000000034"
        },
        "stock_description": {
            "product_id": "P034",
            "stock_quantity": 110,
            "expiry_date": "2025-05-01",
            "critical_quantity": 20
        }
    },
    {
        "id": "P035",
        "product_name": "Bronchitis Relief Syrup",
        "category": "Cough & Cold",
        "main_category": "Pharmacy",
        "brand": "BronchEase",
        "product_image": "https://example.com/images/bronchitis_relief_syrup.jpg",
        "supplier": {
            "id": "S035",
            "name": "BronchEase Ltd.",
            "email": "support@bronchease.com",
            "phone": "+1000000035"
        },
        "stock_description": {
            "product_id": "P035",
            "stock_quantity": 70,
            "expiry_date": "2024-11-01",
            "critical_quantity": 15
        }
    },
    {
        "id": "P036",
        "product_name": "Dermatitis Cream 50g",
        "category": "Skin Care",
        "main_category": "Pharmacy",
        "brand": "DermCare",
        "product_image": "https://example.com/images/dermatitis_cream.jpg",
        "supplier": {
            "id": "S036",
            "name": "DermCare Pharmaceuticals",
            "email": "info@dermcare.com",
            "phone": "+1000000036"
        },
        "stock_description": {
            "product_id": "P036",
            "stock_quantity": 75,
            "expiry_date": "2025-06-01",
            "critical_quantity": 12
        }
    },
    {
        "id": "P037",
        "product_name": "Anti-Fungal Powder 30g",
        "category": "Skin Care",
        "main_category": "Pharmacy",
        "brand": "FungalGuard",
        "product_image": "https://example.com/images/anti_fungal_powder.jpg",
        "supplier": {
            "id": "S037",
            "name": "FungalGuard Ltd.",
            "email": "contact@fungalguard.com",
            "phone": "+1000000037"
        },
        "stock_description": {
            "product_id": "P037",
            "stock_quantity": 85,
            "expiry_date": "2025-03-01",
            "critical_quantity": 15
        }
    },
    {
        "id": "P038",
        "product_name": "Motion Sickness Tablets",
        "category": "Digestive Health",
        "main_category": "Pharmacy",
        "brand": "MotionAway",
        "product_image": "https://example.com/images/motion_sickness_tablets.jpg",
        "supplier": {
            "id": "S038",
            "name": "MotionAway Ltd.",
            "email": "support@motionaway.com",
            "phone": "+1000000038"
        },
        "stock_description": {
            "product_id": "P038",
            "stock_quantity": 70,
            "expiry_date": "2025-05-01",
            "critical_quantity": 12
        }
    },
    {
        "id": "P039",
        "product_name": "Pain Relieving Gel 50g",
        "category": "Pain Relief",
        "main_category": "Pharmacy",
        "brand": "PainEase",
        "product_image": "https://example.com/images/pain_relieving_gel.jpg",
        "supplier": {
            "id": "S039",
            "name": "PainEase Ltd.",
            "email": "info@painease.com",
            "phone": "+1000000039"
        },
        "stock_description": {
            "product_id": "P039",
            "stock_quantity": 90,
            "expiry_date": "2025-04-01",
            "critical_quantity": 15
        }
    },
    {
        "id": "J001",
        "product_name": "Gold Necklace",
        "category": "Necklaces",
        "main_category": "Jewellery",
        "brand": "Luxor",
        "product_image": "https://example.com/images/gold_necklace.jpg",
        "supplier": {
            "id": "J001",
            "name": "Luxor Jewels Ltd.",
            "email": "info@luxorjewels.com",
            "phone": "+1000000101"
        },
        "stock_description": {
            "product_id": "J001",
            "stock_quantity": 50,
            "expiry_date": "N/A",
            "critical_quantity": 5
        }
    },
    {
        "id": "J002",
        "product_name": "Diamond Earrings",
        "category": "Earrings",
        "main_category": "Jewellery",
        "brand": "Glamour",
        "product_image": "https://example.com/images/diamond_earrings.jpg",
        "supplier": {
            "id": "J002",
            "name": "Glamour Gems Inc.",
            "email": "contact@glamourgems.com",
            "phone": "+1000000102"
        },
        "stock_description": {
            "product_id": "J002",
            "stock_quantity": 30,
            "expiry_date": "N/A",
            "critical_quantity": 7
        }
    },
    {
        "id": "J003",
        "product_name": "Silver Bracelet",
        "category": "Bracelets",
        "main_category": "Jewellery",
        "brand": "SilverCraft",
        "product_image": "https://example.com/images/silver_bracelet.jpg",
        "supplier": {
            "id": "J003",
            "name": "SilverCraft Ltd.",
            "email": "info@silvercraft.com",
            "phone": "+1000000103"
        },
        "stock_description": {
            "product_id": "J003",
            "stock_quantity": 70,
            "expiry_date": "N/A",
            "critical_quantity": 10
        }
    },
    {
        "id": "J004",
        "product_name": "Platinum Ring",
        "category": "Rings",
        "main_category": "Jewellery",
        "brand": "Elite",
        "product_image": "https://example.com/images/platinum_ring.jpg",
        "supplier": {
            "id": "J004",
            "name": "Elite Jewels Inc.",
            "email": "support@elitejewels.com",
            "phone": "+1000000104"
        },
        "stock_description": {
            "product_id": "J004",
            "stock_quantity": 40,
            "expiry_date": "N/A",
            "critical_quantity": 8
        }
    },
    {
        "id": "J005",
        "product_name": "Emerald Pendant",
        "category": "Pendants",
        "main_category": "Jewellery",
        "brand": "Gemstone",
        "product_image": "https://example.com/images/emerald_pendant.jpg",
        "supplier": {
            "id": "J005",
            "name": "Gemstone Creations Ltd.",
            "email": "contact@gemstonecreations.com",
            "phone": "+1000000105"
        },
        "stock_description": {
            "product_id": "J005",
            "stock_quantity": 25,
            "expiry_date": "N/A",
            "critical_quantity": 5
        }
    },
    {
        "id": "J006",
        "product_name": "Ruby Ring",
        "category": "Rings",
        "main_category": "Jewellery",
        "brand": "RubyRich",
        "product_image": "https://example.com/images/ruby_ring.jpg",
        "supplier": {
            "id": "J006",
            "name": "RubyRich Ltd.",
            "email": "support@rubyrich.com",
            "phone": "+1000000106"
        },
        "stock_description": {
            "product_id": "J006",
            "stock_quantity": 35,
            "expiry_date": "N/A",
            "critical_quantity": 6
        }
    },
    {
        "id": "J007",
        "product_name": "Sapphire Necklace",
        "category": "Necklaces",
        "main_category": "Jewellery",
        "brand": "BlueGem",
        "product_image": "https://example.com/images/sapphire_necklace.jpg",
        "supplier": {
            "id": "J007",
            "name": "BlueGem Inc.",
            "email": "info@bluegem.com",
            "phone": "+1000000107"
        },
        "stock_description": {
            "product_id": "J007",
            "stock_quantity": 45,
            "expiry_date": "N/A",
            "critical_quantity": 7
        }
    },
    {
        "id": "J008",
        "product_name": "Gold Cufflinks",
        "category": "Cufflinks",
        "main_category": "Jewellery",
        "brand": "ElegantGold",
        "product_image": "https://example.com/images/gold_cufflinks.jpg",
        "supplier": {
            "id": "J008",
            "name": "ElegantGold Ltd.",
            "email": "contact@elegantgold.com",
            "phone": "+1000000108"
        },
        "stock_description": {
            "product_id": "J008",
            "stock_quantity": 60,
            "expiry_date": "N/A",
            "critical_quantity": 10
        }
    },
    {
        "id": "J009",
        "product_name": "Diamond Bracelet",
        "category": "Bracelets",
        "main_category": "Jewellery",
        "brand": "ShineBright",
        "product_image": "https://example.com/images/diamond_bracelet.jpg",
        "supplier": {
            "id": "J009",
            "name": "ShineBright Inc.",
            "email": "info@shinebright.com",
            "phone": "+1000000109"
        },
        "stock_description": {
            "product_id": "J009",
            "stock_quantity": 30,
            "expiry_date": "N/A",
            "critical_quantity": 5
        }
    },
    {
        "id": "J010",
        "product_name": "Pearl Earrings",
        "category": "Earrings",
        "main_category": "Jewellery",
        "brand": "PearlGems",
        "product_image": "https://example.com/images/pearl_earrings.jpg",
        "supplier": {
            "id": "J010",
            "name": "PearlGems Ltd.",
            "email": "support@pearlgems.com",
            "phone": "+1000000110"
        },
        "stock_description": {
            "product_id": "J010",
            "stock_quantity": 55,
            "expiry_date": "N/A",
            "critical_quantity": 6
        }
    },
    {
        "id": "J011",
        "product_name": "Gold Watch",
        "category": "Watches",
        "main_category": "Jewellery",
        "brand": "TimeMaster",
        "product_image": "https://example.com/images/gold_watch.jpg",
        "supplier": {
            "id": "J011",
            "name": "TimeMaster Ltd.",
            "email": "info@timemaster.com",
            "phone": "+1000000111"
        },
        "stock_description": {
            "product_id": "J011",
            "stock_quantity": 20,
            "expiry_date": "N/A",
            "critical_quantity": 4
        }
    },
    {
        "id": "J012",
        "product_name": "Tanzanite Ring",
        "category": "Rings",
        "main_category": "Jewellery",
        "brand": "TanzaniteTreasures",
        "product_image": "https://example.com/images/tanzanite_ring.jpg",
        "supplier": {
            "id": "J012",
            "name": "TanzaniteTreasures Inc.",
            "email": "contact@tanzanitetreasure.com",
            "phone": "+1000000112"
        },
        "stock_description": {
            "product_id": "J012",
            "stock_quantity": 40,
            "expiry_date": "N/A",
            "critical_quantity": 8
        }
    },
    {
        "id": "J013",
        "product_name": "Topaz Pendant",
        "category": "Pendants",
        "main_category": "Jewellery",
        "brand": "TopazDelight",
        "product_image": "https://example.com/images/topaz_pendant.jpg",
        "supplier": {
            "id": "J013",
            "name": "TopazDelight Ltd.",
            "email": "info@topazdelight.com",
            "phone": "+1000000113"
        },
        "stock_description": {
            "product_id": "J013",
            "stock_quantity": 50,
            "expiry_date": "N/A",
            "critical_quantity": 7
        }
    },
    {
        "id": "J014",
        "product_name": "Sapphire Earrings",
        "category": "Earrings",
        "main_category": "Jewellery",
        "brand": "BlueGems",
        "product_image": "https://example.com/images/sapphire_earrings.jpg",
        "supplier": {
            "id": "J014",
            "name": "BlueGems Ltd.",
            "email": "contact@bluegems.com",
            "phone": "+1000000114"
        },
        "stock_description": {
            "product_id": "J014",
            "stock_quantity": 45,
            "expiry_date": "N/A",
            "critical_quantity": 8
        }
    },
    {
        "id": "J015",
        "product_name": "Gold Chain",
        "category": "Necklaces",
        "main_category": "Jewellery",
        "brand": "GoldenThreads",
        "product_image": "https://example.com/images/gold_chain.jpg",
        "supplier": {
            "id": "J015",
            "name": "GoldenThreads Ltd.",
            "email": "info@goldenthreads.com",
            "phone": "+1000000115"
        },
        "stock_description": {
            "product_id": "J015",
            "stock_quantity": 60,
            "expiry_date": "N/A",
            "critical_quantity": 9
        }
    },
    {
        "id": "J016",
        "product_name": "Amethyst Ring",
        "category": "Rings",
        "main_category": "Jewellery",
        "brand": "AmethystGems",
        "product_image": "https://example.com/images/amethyst_ring.jpg",
        "supplier": {
            "id": "J016",
            "name": "AmethystGems Ltd.",
            "email": "contact@amethystgems.com",
            "phone": "+1000000116"
        },
        "stock_description": {
            "product_id": "J016",
            "stock_quantity": 55,
            "expiry_date": "N/A",
            "critical_quantity": 7
        }
    },
    {
        "id": "J017",
        "product_name": "Gold Bangle",
        "category": "Bracelets",
        "main_category": "Jewellery",
        "brand": "GoldenGrace",
        "product_image": "https://example.com/images/gold_bangle.jpg",
        "supplier": {
            "id": "J017",
            "name": "GoldenGrace Inc.",
            "email": "info@goldengrace.com",
            "phone": "+1000000117"
        },
        "stock_description": {
            "product_id": "J017",
            "stock_quantity": 35,
            "expiry_date": "N/A",
            "critical_quantity": 6
        }
    },
    {
        "id": "J018",
        "product_name": "Ruby Earrings",
        "category": "Earrings",
        "main_category": "Jewellery",
        "brand": "RubyGems",
        "product_image": "https://example.com/images/ruby_earrings.jpg",
        "supplier": {
            "id": "J018",
            "name": "RubyGems Ltd.",
            "email": "contact@rubygems.com",
            "phone": "+1000000118"
        },
        "stock_description": {
            "product_id": "J018",
            "stock_quantity": 40,
            "expiry_date": "N/A",
            "critical_quantity": 7
        }
    },
    {
        "id": "J019",
        "product_name": "Silver Pendant",
        "category": "Pendants",
        "main_category": "Jewellery",
        "brand": "SilverLuxe",
        "product_image": "https://example.com/images/silver_pendant.jpg",
        "supplier": {
            "id": "J019",
            "name": "SilverLuxe Inc.",
            "email": "info@silverluxe.com",
            "phone": "+1000000119"
        },
        "stock_description": {
            "product_id": "J019",
            "stock_quantity": 65,
            "expiry_date": "N/A",
            "critical_quantity": 8
        }
    },
    {
        "id": "J020",
        "product_name": "Diamond Brooch",
        "category": "Brooches",
        "main_category": "Jewellery",
        "brand": "DiamondElite",
        "product_image": "https://example.com/images/diamond_brooch.jpg",
        "supplier": {
            "id": "J020",
            "name": "DiamondElite Ltd.",
            "email": "support@diamondelite.com",
            "phone": "+1000000120"
        },
        "stock_description": {
            "product_id": "J020",
            "stock_quantity": 25,
            "expiry_date": "N/A",
            "critical_quantity": 5
        }
    },
    {
        "id": "J021",
        "product_name": "Gold Earrings",
        "category": "Earrings",
        "main_category": "Jewellery",
        "brand": "GoldenGems",
        "product_image": "https://example.com/images/gold_earrings.jpg",
        "supplier": {
            "id": "J021",
            "name": "GoldenGems Ltd.",
            "email": "info@goldengems.com",
            "phone": "+1000000121"
        },
        "stock_description": {
            "product_id": "J021",
            "stock_quantity": 80,
            "expiry_date": "N/A",
            "critical_quantity": 12
        }
    },
    {
        "id": "J022",
        "product_name": "Silver Ring",
        "category": "Rings",
        "main_category": "Jewellery",
        "brand": "SilverGlam",
        "product_image": "https://example.com/images/silver_ring.jpg",
        "supplier": {
            "id": "J022",
            "name": "SilverGlam Ltd.",
            "email": "contact@silverglam.com",
            "phone": "+1000000122"
        },
        "stock_description": {
            "product_id": "J022",
            "stock_quantity": 50,
            "expiry_date": "N/A",
            "critical_quantity": 7
        }
    },
    {
        "id": "J023",
        "product_name": "Topaz Bracelet",
        "category": "Bracelets",
        "main_category": "Jewellery",
        "brand": "TopazTreasures",
        "product_image": "https://example.com/images/topaz_bracelet.jpg",
        "supplier": {
            "id": "J023",
            "name": "TopazTreasures Ltd.",
            "email": "info@topaztreasures.com",
            "phone": "+1000000123"
        },
        "stock_description": {
            "product_id": "J023",
            "stock_quantity": 65,
            "expiry_date": "N/A",
            "critical_quantity": 8
        }
    },
    {
        "id": "J024",
        "product_name": "Emerald Earrings",
        "category": "Earrings",
        "main_category": "Jewellery",
        "brand": "EmeraldGems",
        "product_image": "https://example.com/images/emerald_earrings.jpg",
        "supplier": {
            "id": "J024",
            "name": "EmeraldGems Inc.",
            "email": "contact@emeraldgems.com",
            "phone": "+1000000124"
        },
        "stock_description": {
            "product_id": "J024",
            "stock_quantity": 30,
            "expiry_date": "N/A",
            "critical_quantity": 6
        }
    },
    {
        "id": "J025",
        "product_name": "Gold Pendant",
        "category": "Pendants",
        "main_category": "Jewellery",
        "brand": "GoldTreasures",
        "product_image": "https://example.com/images/gold_pendant.jpg",
        "supplier": {
            "id": "J025",
            "name": "GoldTreasures Ltd.",
            "email": "info@goldtreasures.com",
            "phone": "+1000000125"
        },
        "stock_description": {
            "product_id": "J025",
            "stock_quantity": 40,
            "expiry_date": "N/A",
            "critical_quantity": 7
        }
    },
    {
        "id": "J026",
        "product_name": "Diamond Necklace",
        "category": "Necklaces",
        "main_category": "Jewellery",
        "brand": "DiamondLux",
        "product_image": "https://example.com/images/diamond_necklace.jpg",
        "supplier": {
            "id": "J026",
            "name": "DiamondLux Ltd.",
            "email": "support@diamondlux.com",
            "phone": "+1000000126"
        },
        "stock_description": {
            "product_id": "J026",
            "stock_quantity": 20,
            "expiry_date": "N/A",
            "critical_quantity": 4
        }
    },
    {
        "id": "J027",
        "product_name": "Tanzanite Earrings",
        "category": "Earrings",
        "main_category": "Jewellery",
        "brand": "TanzaniteGems",
        "product_image": "https://example.com/images/tanzanite_earrings.jpg",
        "supplier": {
            "id": "J027",
            "name": "TanzaniteGems Ltd.",
            "email": "info@tanzanitegems.com",
            "phone": "+1000000127"
        },
        "stock_description": {
            "product_id": "J027",
            "stock_quantity": 25,
            "expiry_date": "N/A",
            "critical_quantity": 5
        }
    },
    {
        "id": "J028",
        "product_name": "Silver Cufflinks",
        "category": "Cufflinks",
        "main_category": "Jewellery",
        "brand": "SilverStyle",
        "product_image": "https://example.com/images/silver_cufflinks.jpg",
        "supplier": {
            "id": "J028",
            "name": "SilverStyle Ltd.",
            "email": "support@silverstyle.com",
            "phone": "+1000000128"
        },
        "stock_description": {
            "product_id": "J028",
            "stock_quantity": 50,
            "expiry_date": "N/A",
            "critical_quantity": 6
        }
    },
    {
        "id": "J029",
        "product_name": "Platinum Pendant",
        "category": "Pendants",
        "main_category": "Jewellery",
        "brand": "PlatinumElite",
        "product_image": "https://example.com/images/platinum_pendant.jpg",
        "supplier": {
            "id": "J029",
            "name": "PlatinumElite Inc.",
            "email": "info@platinumelite.com",
            "phone": "+1000000129"
        },
        "stock_description": {
            "product_id": "J029",
            "stock_quantity": 30,
            "expiry_date": "N/A",
            "critical_quantity": 6
        }
    },
    {
        "id": "J030",
        "product_name": "Emerald Necklace",
        "category": "Necklaces",
        "main_category": "Jewellery",
        "brand": "EmeraldLux",
        "product_image": "https://example.com/images/emerald_necklace.jpg",
        "supplier": {
            "id": "J030",
            "name": "EmeraldLux Ltd.",
            "email": "support@emeraldlux.com",
            "phone": "+1000000130"
        },
        "stock_description": {
            "product_id": "J030",
            "stock_quantity": 45,
            "expiry_date": "N/A",
            "critical_quantity": 7
        }
    },
    {
        "id": "J031",
        "product_name": "Gold Brooch",
        "category": "Brooches",
        "main_category": "Jewellery",
        "brand": "GoldGems",
        "product_image": "https://example.com/images/gold_brooch.jpg",
        "supplier": {
            "id": "J031",
            "name": "GoldGems Ltd.",
            "email": "info@goldgems.com",
            "phone": "+1000000131"
        },
        "stock_description": {
            "product_id": "J031",
            "stock_quantity": 25,
            "expiry_date": "N/A",
            "critical_quantity": 4
        }
    },
    {
        "id": "J032",
        "product_name": "Platinum Ring",
        "category": "Rings",
        "main_category": "Jewellery",
        "brand": "PlatinumGems",
        "product_image": "https://example.com/images/platinum_ring.jpg",
        "supplier": {
            "id": "J032",
            "name": "PlatinumGems Ltd.",
            "email": "contact@platinumgems.com",
            "phone": "+1000000132"
        },
        "stock_description": {
            "product_id": "J032",
            "stock_quantity": 35,
            "expiry_date": "N/A",
            "critical_quantity": 6
        }
    },
    {
        "id": "J033",
        "product_name": "Topaz Earrings",
        "category": "Earrings",
        "main_category": "Jewellery",
        "brand": "TopazElegance",
        "product_image": "https://example.com/images/topaz_earrings.jpg",
        "supplier": {
            "id": "J033",
            "name": "TopazElegance Inc.",
            "email": "info@topazelegance.com",
            "phone": "+1000000133"
        },
        "stock_description": {
            "product_id": "J033",
            "stock_quantity": 40,
            "expiry_date": "N/A",
            "critical_quantity": 7
        }
    },
    {
        "id": "J034",
        "product_name": "Ruby Pendant",
        "category": "Pendants",
        "main_category": "Jewellery",
        "brand": "RubyLux",
        "product_image": "https://example.com/images/ruby_pendant.jpg",
        "supplier": {
            "id": "J034",
            "name": "RubyLux Ltd.",
            "email": "support@rubylux.com",
            "phone": "+1000000134"
        },
        "stock_description": {
            "product_id": "J034",
            "stock_quantity": 50,
            "expiry_date": "N/A",
            "critical_quantity": 8
        }
    },
    {
        "id": "J035",
        "product_name": "Silver Necklace",
        "category": "Necklaces",
        "main_category": "Jewellery",
        "brand": "SilverChic",
        "product_image": "https://example.com/images/silver_necklace.jpg",
        "supplier": {
            "id": "J035",
            "name": "SilverChic Ltd.",
            "email": "info@silverchic.com",
            "phone": "+1000000135"
        },
        "stock_description": {
            "product_id": "J035",
            "stock_quantity": 60,
            "expiry_date": "N/A",
            "critical_quantity": 9
        }
    },
    {
        "id": "J036",
        "product_name": "Amethyst Pendant",
        "category": "Pendants",
        "main_category": "Jewellery",
        "brand": "AmethystLux",
        "product_image": "https://example.com/images/amethyst_pendant.jpg",
        "supplier": {
            "id": "J036",
            "name": "AmethystLux Ltd.",
            "email": "contact@amethystlux.com",
            "phone": "+1000000136"
        },
        "stock_description": {
            "product_id": "J036",
            "stock_quantity": 25,
            "expiry_date": "N/A",
            "critical_quantity": 5
        }
    },
    {
        "id": "J037",
        "product_name": "Diamond Cufflinks",
        "category": "Cufflinks",
        "main_category": "Jewellery",
        "brand": "DiamondElegance",
        "product_image": "https://example.com/images/diamond_cufflinks.jpg",
        "supplier": {
            "id": "J037",
            "name": "DiamondElegance Ltd.",
            "email": "support@diamondelegance.com",
            "phone": "+1000000137"
        },
        "stock_description": {
            "product_id": "J037",
            "stock_quantity": 30,
            "expiry_date": "N/A",
            "critical_quantity": 6
        }
    },
    {
        "id": "J038",
        "product_name": "Gold Brooch",
        "category": "Brooches",
        "main_category": "Jewellery",
        "brand": "GoldElite",
        "product_image": "https://example.com/images/gold_brooch.jpg",
        "supplier": {
            "id": "J038",
            "name": "GoldElite Ltd.",
            "email": "info@goldelite.com",
            "phone": "+1000000138"
        },
        "stock_description": {
            "product_id": "J038",
            "stock_quantity": 20,
            "expiry_date": "N/A",
            "critical_quantity": 4
        }
    },
    {
        "id": "J039",
        "product_name": "Platinum Cufflinks",
        "category": "Cufflinks",
        "main_category": "Jewellery",
        "brand": "PlatinumLuxe",
        "product_image": "https://example.com/images/platinum_cufflinks.jpg",
        "supplier": {
            "id": "J039",
            "name": "PlatinumLuxe Ltd.",
            "email": "contact@platinumluxe.com",
            "phone": "+1000000139"
        },
        "stock_description": {
            "product_id": "J039",
            "stock_quantity": 45,
            "expiry_date": "N/A",
            "critical_quantity": 8
        }
    },
    {
        "id": "K001",
        "product_name": "Cotton T-Shirt",
        "category": "T-Shirts",
        "main_category": "Kids wear",
        "brand": "TinyTrends",
        "product_image": "https://example.com/images/cotton_tshirt.jpg",
        "supplier": {
            "id": "K001",
            "name": "TinyTrends Ltd.",
            "email": "info@tinytrends.com",
            "phone": "+1000000301"
        },
        "stock_description": {
            "product_id": "K001",
            "stock_quantity": 150,
            "expiry_date": "N/A",
            "critical_quantity": 20
        }
    },
    {
        "id": "K002",
        "product_name": "Denim Shorts",
        "category": "Shorts",
        "main_category": "Kids wear",
        "brand": "LittleDenim",
        "product_image": "https://example.com/images/denim_shorts.jpg",
        "supplier": {
            "id": "K002",
            "name": "LittleDenim Co.",
            "email": "contact@littledenim.com",
            "phone": "+1000000302"
        },
        "stock_description": {
            "product_id": "K002",
            "stock_quantity": 80,
            "expiry_date": "N/A",
            "critical_quantity": 12
        }
    },
    {
        "id": "K003",
        "product_name": "Plaid Skirt",
        "category": "Skirts",
        "main_category": "Kids wear",
        "brand": "PlaidKidz",
        "product_image": "https://example.com/images/plaid_skirt.jpg",
        "supplier": {
            "id": "K003",
            "name": "PlaidKidz Ltd.",
            "email": "info@plaidkidz.com",
            "phone": "+1000000303"
        },
        "stock_description": {
            "product_id": "K003",
            "stock_quantity": 65,
            "expiry_date": "N/A",
            "critical_quantity": 10
        }
    },
    {
        "id": "K004",
        "product_name": "Winter Jacket",
        "category": "Jackets",
        "main_category": "Kids wear",
        "brand": "SnowBuddies",
        "product_image": "https://example.com/images/winter_jacket.jpg",
        "supplier": {
            "id": "K004",
            "name": "SnowBuddies Ltd.",
            "email": "support@snowbuddies.com",
            "phone": "+1000000304"
        },
        "stock_description": {
            "product_id": "K004",
            "stock_quantity": 50,
            "expiry_date": "N/A",
            "critical_quantity": 8
        }
    },
    {
        "id": "K005",
        "product_name": "Graphic Hoodie",
        "category": "Hoodies",
        "main_category": "Kids wear",
        "brand": "FunWear",
        "product_image": "https://example.com/images/graphic_hoodie.jpg",
        "supplier": {
            "id": "K005",
            "name": "FunWear Co.",
            "email": "contact@funwear.com",
            "phone": "+1000000305"
        },
        "stock_description": {
            "product_id": "K005",
            "stock_quantity": 40,
            "expiry_date": "N/A",
            "critical_quantity": 7
        }
    },
    {
        "id": "K006",
        "product_name": "Cotton Dress",
        "category": "Dresses",
        "main_category": "Kids wear",
        "brand": "DressyKids",
        "product_image": "https://example.com/images/cotton_dress.jpg",
        "supplier": {
            "id": "K006",
            "name": "DressyKids Ltd.",
            "email": "info@dressykids.com",
            "phone": "+1000000306"
        },
        "stock_description": {
            "product_id": "K006",
            "stock_quantity": 70,
            "expiry_date": "N/A",
            "critical_quantity": 10
        }
    },
    {
        "id": "K007",
        "product_name": "Polo Shirt",
        "category": "Shirts",
        "main_category": "Kids wear",
        "brand": "PoloKidz",
        "product_image": "https://example.com/images/polo_shirt.jpg",
        "supplier": {
            "id": "K007",
            "name": "PoloKidz Co.",
            "email": "contact@polokidz.com",
            "phone": "+1000000307"
        },
        "stock_description": {
            "product_id": "K007",
            "stock_quantity": 85,
            "expiry_date": "N/A",
            "critical_quantity": 15
        }
    },
    {
        "id": "K008",
        "product_name": "Tulle Skirt",
        "category": "Skirts",
        "main_category": "Kids wear",
        "brand": "TulleTwist",
        "product_image": "https://example.com/images/tulle_skirt.jpg",
        "supplier": {
            "id": "K008",
            "name": "TulleTwist Ltd.",
            "email": "info@tulletwist.com",
            "phone": "+1000000308"
        },
        "stock_description": {
            "product_id": "K008",
            "stock_quantity": 60,
            "expiry_date": "N/A",
            "critical_quantity": 9
        }
    },
    {
        "id": "K009",
        "product_name": "Snow Boots",
        "category": "Footwear",
        "main_category": "Kids wear",
        "brand": "Boots4Kids",
        "product_image": "https://example.com/images/snow_boots.jpg",
        "supplier": {
            "id": "K009",
            "name": "Boots4Kids Inc.",
            "email": "support@boots4kids.com",
            "phone": "+1000000309"
        },
        "stock_description": {
            "product_id": "K009",
            "stock_quantity": 45,
            "expiry_date": "N/A",
            "critical_quantity": 6
        }
    },
    {
        "id": "K010",
        "product_name": "Playful Romper",
        "category": "Rompers",
        "main_category": "Kids wear",
        "brand": "PlayRomp",
        "product_image": "https://example.com/images/playful_romper.jpg",
        "supplier": {
            "id": "K010",
            "name": "PlayRomp Ltd.",
            "email": "contact@playromp.com",
            "phone": "+1000000310"
        },
        "stock_description": {
            "product_id": "K010",
            "stock_quantity": 55,
            "expiry_date": "N/A",
            "critical_quantity": 7
        }
    },
    {
        "id": "K011",
        "product_name": "Denim Jacket",
        "category": "Jackets",
        "main_category": "Kids wear",
        "brand": "DenimDreams",
        "product_image": "https://example.com/images/denim_jacket.jpg",
        "supplier": {
            "id": "K011",
            "name": "DenimDreams Ltd.",
            "email": "info@denimdreams.com",
            "phone": "+1000000311"
        },
        "stock_description": {
            "product_id": "K011",
            "stock_quantity": 40,
            "expiry_date": "N/A",
            "critical_quantity": 8
        }
    },
    {
        "id": "K012",
        "product_name": "Raincoat",
        "category": "Coats",
        "main_category": "Kids wear",
        "brand": "RainyDay",
        "product_image": "https://example.com/images/raincoat.jpg",
        "supplier": {
            "id": "K012",
            "name": "RainyDay Co.",
            "email": "support@rainyday.com",
            "phone": "+1000000312"
        },
        "stock_description": {
            "product_id": "K012",
            "stock_quantity": 70,
            "expiry_date": "N/A",
            "critical_quantity": 10
        }
    },
    {
        "id": "K013",
        "product_name": "Sweater Vest",
        "category": "Sweaters",
        "main_category": "Kids wear",
        "brand": "WarmSnuggles",
        "product_image": "https://example.com/images/sweater_vest.jpg",
        "supplier": {
            "id": "K013",
            "name": "WarmSnuggles Ltd.",
            "email": "info@warmsnuggles.com",
            "phone": "+1000000313"
        },
        "stock_description": {
            "product_id": "K013",
            "stock_quantity": 90,
            "expiry_date": "N/A",
            "critical_quantity": 12
        }
    },
    {
        "id": "K014",
        "product_name": "Graphic T-Shirt",
        "category": "T-Shirts",
        "main_category": "Kids wear",
        "brand": "GraphicKidz",
        "product_image": "https://example.com/images/graphic_tshirt.jpg",
        "supplier": {
            "id": "K014",
            "name": "GraphicKidz Ltd.",
            "email": "contact@graphickidz.com",
            "phone": "+1000000314"
        },
        "stock_description": {
            "product_id": "K014",
            "stock_quantity": 120,
            "expiry_date": "N/A",
            "critical_quantity": 15
        }
    },
    {
        "id": "K015",
        "product_name": "Fleece Jacket",
        "category": "Jackets",
        "main_category": "Kids wear",
        "brand": "FleeceFrenzy",
        "product_image": "https://example.com/images/fleece_jacket.jpg",
        "supplier": {
            "id": "K015",
            "name": "FleeceFrenzy Ltd.",
            "email": "info@fleecefrenzy.com",
            "phone": "+1000000315"
        },
        "stock_description": {
            "product_id": "K015",
            "stock_quantity": 55,
            "expiry_date": "N/A",
            "critical_quantity": 9
        }
    },
    {
        "id": "K016",
        "product_name": "Chino Pants",
        "category": "Pants",
        "main_category": "Kids wear",
        "brand": "ChinoCharm",
        "product_image": "https://example.com/images/chino_pants.jpg",
        "supplier": {
            "id": "K016",
            "name": "ChinoCharm Ltd.",
            "email": "contact@chinacharm.com",
            "phone": "+1000000316"
        },
        "stock_description": {
            "product_id": "K016",
            "stock_quantity": 65,
            "expiry_date": "N/A",
            "critical_quantity": 10
        }
    },
    {
        "id": "K017",
        "product_name": "Activewear Set",
        "category": "Activewear",
        "main_category": "Kids wear",
        "brand": "ActiveKidz",
        "product_image": "https://example.com/images/activewear_set.jpg",
        "supplier": {
            "id": "K017",
            "name": "ActiveKidz Ltd.",
            "email": "info@activekidz.com",
            "phone": "+1000000317"
        },
        "stock_description": {
            "product_id": "K017",
            "stock_quantity": 80,
            "expiry_date": "N/A",
            "critical_quantity": 11
        }
    },
    {
        "id": "K018",
        "product_name": "Warm Leggings",
        "category": "Leggings",
        "main_category": "Kids wear",
        "brand": "WarmLegs",
        "product_image": "https://example.com/images/warm_leggings.jpg",
        "supplier": {
            "id": "K018",
            "name": "WarmLegs Ltd.",
            "email": "contact@warmlegs.com",
            "phone": "+1000000318"
        },
        "stock_description": {
            "product_id": "K018",
            "stock_quantity": 100,
            "expiry_date": "N/A",
            "critical_quantity": 13
        }
    },
    {
        "id": "K019",
        "product_name": "Sun Hat",
        "category": "Hats",
        "main_category": "Kids wear",
        "brand": "SunshineWear",
        "product_image": "https://example.com/images/sun_hat.jpg",
        "supplier": {
            "id": "K019",
            "name": "SunshineWear Ltd.",
            "email": "info@sunshinewear.com",
            "phone": "+1000000319"
        },
        "stock_description": {
            "product_id": "K019",
            "stock_quantity": 110,
            "expiry_date": "N/A",
            "critical_quantity": 14
        }
    },
    {
        "id": "K020",
        "product_name": "Rain Boots",
        "category": "Footwear",
        "main_category": "Kids wear",
        "brand": "RainySteps",
        "product_image": "https://example.com/images/rain_boots.jpg",
        "supplier": {
            "id": "K020",
            "name": "RainySteps Ltd.",
            "email": "support@rainysteps.com",
            "phone": "+1000000320"
        },
        "stock_description": {
            "product_id": "K020",
            "stock_quantity": 85,
            "expiry_date": "N/A",
            "critical_quantity": 10
        }
    },
    {
        "id": "K021",
        "product_name": "Summer Dress",
        "category": "Dresses",
        "main_category": "Kids wear",
        "brand": "SunnyDress",
        "product_image": "https://example.com/images/summer_dress.jpg",
        "supplier": {
            "id": "K021",
            "name": "SunnyDress Ltd.",
            "email": "contact@sunnydress.com",
            "phone": "+1000000321"
        },
        "stock_description": {
            "product_id": "K021",
            "stock_quantity": 90,
            "expiry_date": "N/A",
            "critical_quantity": 12
        }
    },
    {
        "id": "K022",
        "product_name": "Fleece Pants",
        "category": "Pants",
        "main_category": "Kids wear",
        "brand": "FleeceFashion",
        "product_image": "https://example.com/images/fleece_pants.jpg",
        "supplier": {
            "id": "K022",
            "name": "FleeceFashion Ltd.",
            "email": "info@fleecefashion.com",
            "phone": "+1000000322"
        },
        "stock_description": {
            "product_id": "K022",
            "stock_quantity": 75,
            "expiry_date": "N/A",
            "critical_quantity": 11
        }
    },
    {
        "id": "K023",
        "product_name": "Sporty Tracksuit",
        "category": "Tracksuits",
        "main_category": "Kids wear",
        "brand": "SportyKids",
        "product_image": "https://example.com/images/sporty_tracksuit.jpg",
        "supplier": {
            "id": "K023",
            "name": "SportyKids Ltd.",
            "email": "support@sportykids.com",
            "phone": "+1000000323"
        },
        "stock_description": {
            "product_id": "K023",
            "stock_quantity": 65,
            "expiry_date": "N/A",
            "critical_quantity": 8
        }
    },
    {
        "id": "K024",
        "product_name": "Denim Overalls",
        "category": "Overalls",
        "main_category": "Kids wear",
        "brand": "DenimKids",
        "product_image": "https://example.com/images/denim_overalls.jpg",
        "supplier": {
            "id": "K024",
            "name": "DenimKids Ltd.",
            "email": "info@denimkids.com",
            "phone": "+1000000324"
        },
        "stock_description": {
            "product_id": "K024",
            "stock_quantity": 50,
            "expiry_date": "N/A",
            "critical_quantity": 9
        }
    },
    {
        "id": "K025",
        "product_name": "Cotton Socks",
        "category": "Socks",
        "main_category": "Kids wear",
        "brand": "CozySocks",
        "product_image": "https://example.com/images/cotton_socks.jpg",
        "supplier": {
            "id": "K025",
            "name": "CozySocks Co.",
            "email": "contact@cozysocks.com",
            "phone": "+1000000325"
        },
        "stock_description": {
            "product_id": "K025",
            "stock_quantity": 200,
            "expiry_date": "N/A",
            "critical_quantity": 30
        }
    },
    {
        "id": "K026",
        "product_name": "Printed Pajamas",
        "category": "Pajamas",
        "main_category": "Kids wear",
        "brand": "SleepyKidz",
        "product_image": "https://example.com/images/printed_pajamas.jpg",
        "supplier": {
            "id": "K026",
            "name": "SleepyKidz Ltd.",
            "email": "support@sleepykidz.com",
            "phone": "+1000000326"
        },
        "stock_description": {
            "product_id": "K026",
            "stock_quantity": 70,
            "expiry_date": "N/A",
            "critical_quantity": 9
        }
    },
    {
        "id": "K027",
        "product_name": "Dressy Leggings",
        "category": "Leggings",
        "main_category": "Kids wear",
        "brand": "DressyLegs",
        "product_image": "https://example.com/images/dressy_leggings.jpg",
        "supplier": {
            "id": "K027",
            "name": "DressyLegs Ltd.",
            "email": "info@dressylegs.com",
            "phone": "+1000000327"
        },
        "stock_description": {
            "product_id": "K027",
            "stock_quantity": 85,
            "expiry_date": "N/A",
            "critical_quantity": 10
        }
    },
    {
        "id": "K028",
        "product_name": "Ruffled Dress",
        "category": "Dresses",
        "main_category": "Kids wear",
        "brand": "RuffleWear",
        "product_image": "https://example.com/images/ruffled_dress.jpg",
        "supplier": {
            "id": "K028",
            "name": "RuffleWear Ltd.",
            "email": "contact@rufflewear.com",
            "phone": "+1000000328"
        },
        "stock_description": {
            "product_id": "K028",
            "stock_quantity": 60,
            "expiry_date": "N/A",
            "critical_quantity": 8
        }
    },
    {
        "id": "K029",
        "product_name": "Summer Shorts",
        "category": "Shorts",
        "main_category": "Kids wear",
        "brand": "SunnyShorts",
        "product_image": "https://example.com/images/summer_shorts.jpg",
        "supplier": {
            "id": "K029",
            "name": "SunnyShorts Co.",
            "email": "info@sunnyshorts.com",
            "phone": "+1000000329"
        },
        "stock_description": {
            "product_id": "K029",
            "stock_quantity": 95,
            "expiry_date": "N/A",
            "critical_quantity": 12
        }
    },
    {
        "id": "K030",
        "product_name": "Cozy Sweater",
        "category": "Sweaters",
        "main_category": "Kids wear",
        "brand": "CozyWear",
        "product_image": "https://example.com/images/cozy_sweater.jpg",
        "supplier": {
            "id": "K030",
            "name": "CozyWear Ltd.",
            "email": "contact@cozywear.com",
            "phone": "+1000000330"
        },
        "stock_description": {
            "product_id": "K030",
            "stock_quantity": 85,
            "expiry_date": "N/A",
            "critical_quantity": 12
        }
    },
    {
        "id": "K031",
        "product_name": "Warm Hat",
        "category": "Hats",
        "main_category": "Kids wear",
        "brand": "WarmHats",
        "product_image": "https://example.com/images/warm_hat.jpg",
        "supplier": {
            "id": "K031",
            "name": "WarmHats Ltd.",
            "email": "info@warmhats.com",
            "phone": "+1000000331"
        },
        "stock_description": {
            "product_id": "K031",
            "stock_quantity": 90,
            "expiry_date": "N/A",
            "critical_quantity": 14
        }
    },
    {
        "id": "K032",
        "product_name": "Dress Shorts",
        "category": "Shorts",
        "main_category": "Kids wear",
        "brand": "DressShorts",
        "product_image": "https://example.com/images/dress_shorts.jpg",
        "supplier": {
            "id": "K032",
            "name": "DressShorts Ltd.",
            "email": "contact@dressshorts.com",
            "phone": "+1000000332"
        },
        "stock_description": {
            "product_id": "K032",
            "stock_quantity": 75,
            "expiry_date": "N/A",
            "critical_quantity": 10
        }
    },
    {
        "id": "K033",
        "product_name": "Puffer Vest",
        "category": "Vests",
        "main_category": "Kids wear",
        "brand": "PufferPro",
        "product_image": "https://example.com/images/puffer_vest.jpg",
        "supplier": {
            "id": "K033",
            "name": "PufferPro Ltd.",
            "email": "info@pufferpro.com",
            "phone": "+1000000333"
        },
        "stock_description": {
            "product_id": "K033",
            "stock_quantity": 55,
            "expiry_date": "N/A",
            "critical_quantity": 8
        }
    },
    {
        "id": "K034",
        "product_name": "Floral Romper",
        "category": "Rompers",
        "main_category": "Kids wear",
        "brand": "FloralKidz",
        "product_image": "https://example.com/images/floral_romper.jpg",
        "supplier": {
            "id": "K034",
            "name": "FloralKidz Ltd.",
            "email": "contact@floralkidz.com",
            "phone": "+1000000334"
        },
        "stock_description": {
            "product_id": "K034",
            "stock_quantity": 60,
            "expiry_date": "N/A",
            "critical_quantity": 9
        }
    },
    {
        "id": "K035",
        "product_name": "Warm Gloves",
        "category": "Gloves",
        "main_category": "Kids wear",
        "brand": "WarmFingers",
        "product_image": "https://example.com/images/warm_gloves.jpg",
        "supplier": {
            "id": "K035",
            "name": "WarmFingers Ltd.",
            "email": "info@warmfingers.com",
            "phone": "+1000000335"
        },
        "stock_description": {
            "product_id": "K035",
            "stock_quantity": 80,
            "expiry_date": "N/A",
            "critical_quantity": 12
        }
    },
    {
        "id": "K036",
        "product_name": "Button-Down Shirt",
        "category": "Shirts",
        "main_category": "Kids wear",
        "brand": "ButtonDownKidz",
        "product_image": "https://example.com/images/button_down_shirt.jpg",
        "supplier": {
            "id": "K036",
            "name": "ButtonDownKidz Ltd.",
            "email": "contact@buttondownkidz.com",
            "phone": "+1000000336"
        },
        "stock_description": {
            "product_id": "K036",
            "stock_quantity": 100,
            "expiry_date": "N/A",
            "critical_quantity": 15
        }
    },
    {
        "id": "K037",
        "product_name": "Summer Hat",
        "category": "Hats",
        "main_category": "Kids wear",
        "brand": "SummerShade",
        "product_image": "https://example.com/images/summer_hat.jpg",
        "supplier": {
            "id": "K037",
            "name": "SummerShade Ltd.",
            "email": "info@summershade.com",
            "phone": "+1000000337"
        },
        "stock_description": {
            "product_id": "K037",
            "stock_quantity": 85,
            "expiry_date": "N/A",
            "critical_quantity": 11
        }
    },
    {
        "id": "K038",
        "product_name": "Plaid Shirt",
        "category": "Shirts",
        "main_category": "Kids wear",
        "brand": "PlaidKids",
        "product_image": "https://example.com/images/plaid_shirt.jpg",
        "supplier": {
            "id": "K038",
            "name": "PlaidKids Ltd.",
            "email": "contact@plaidkids.com",
            "phone": "+1000000338"
        },
        "stock_description": {
            "product_id": "K038",
            "stock_quantity": 95,
            "expiry_date": "N/A",
            "critical_quantity": 13
        }
    },
    {
        "id": "K039",
        "product_name": "Sweater Dress",
        "category": "Dresses",
        "main_category": "Kids wear",
        "brand": "SweaterWear",
        "product_image": "https://example.com/images/sweater_dress.jpg",
        "supplier": {
            "id": "K039",
            "name": "SweaterWear Ltd.",
            "email": "info@sweaterwear.com",
            "phone": "+1000000339"
        },
        "stock_description": {
            "product_id": "K039",
            "stock_quantity": 70,
            "expiry_date": "N/A",
            "critical_quantity": 10
        }
    },
    {
        "id": "K040",
        "product_name": "Playful Socks",
        "category": "Socks",
        "main_category": "Kids wear",
        "brand": "PlaySocks",
        "product_image": "https://example.com/images/playful_socks.jpg",
        "supplier": {
            "id": "K040",
            "name": "PlaySocks Ltd.",
            "email": "contact@playsocks.com",
            "phone": "+1000000340"
        },
        "stock_description": {
            "product_id": "K040",
            "stock_quantity": 150,
            "expiry_date": "N/A",
            "critical_quantity": 20
        }
    },
    {
        "id": "K041",
        "product_name": "Cozy Pants",
        "category": "Pants",
        "main_category": "Kids wear",
        "brand": "CozyFit",
        "product_image": "https://example.com/images/cozy_pants.jpg",
        "supplier": {
            "id": "K041",
            "name": "CozyFit Ltd.",
            "email": "contact@cozyfit.com",
            "phone": "+1000000341"
        },
        "stock_description": {
            "product_id": "K041",
            "stock_quantity": 80,
            "expiry_date": "N/A",
            "critical_quantity": 11
        }
    },
    {
        "id": "K042",
        "product_name": "Bright Jacket",
        "category": "Jackets",
        "main_category": "Kids wear",
        "brand": "BrightWear",
        "product_image": "https://example.com/images/bright_jacket.jpg",
        "supplier": {
            "id": "K042",
            "name": "BrightWear Ltd.",
            "email": "support@brightwear.com",
            "phone": "+1000000342"
        },
        "stock_description": {
            "product_id": "K042",
            "stock_quantity": 70,
            "expiry_date": "N/A",
            "critical_quantity": 10
        }
    },
    {
        "id": "K043",
        "product_name": "Floral Dress",
        "category": "Dresses",
        "main_category": "Kids wear",
        "brand": "FloralWear",
        "product_image": "https://example.com/images/floral_dress.jpg",
        "supplier": {
            "id": "K043",
            "name": "FloralWear Ltd.",
            "email": "contact@floralwear.com",
            "phone": "+1000000343"
        },
        "stock_description": {
            "product_id": "K043",
            "stock_quantity": 80,
            "expiry_date": "N/A",
            "critical_quantity": 10
        }
    },
    {
        "id": "K044",
        "product_name": "Thermal Vest",
        "category": "Vests",
        "main_category": "Kids wear",
        "brand": "ThermalWear",
        "product_image": "https://example.com/images/thermal_vest.jpg",
        "supplier": {
            "id": "K044",
            "name": "ThermalWear Ltd.",
            "email": "contact@thermalwear.com",
            "phone": "+1000000344"
        },
        "stock_description": {
            "product_id": "K044",
            "stock_quantity": 60,
            "expiry_date": "N/A",
            "critical_quantity": 8
        }
    },
    {
        "id": "K045",
        "product_name": "Polo Shirt",
        "category": "Shirts",
        "main_category": "Kids wear",
        "brand": "PoloKidz",
        "product_image": "https://example.com/images/polo_shirt.jpg",
        "supplier": {
            "id": "K045",
            "name": "PoloKidz Ltd.",
            "email": "contact@polokidz.com",
            "phone": "+1000000345"
        },
        "stock_description": {
            "product_id": "K045",
            "stock_quantity": 95,
            "expiry_date": "N/A",
            "critical_quantity": 12
        }
    },
    {
        "id": "C001",
        "product_name": "Non-Stick Frying Pan",
        "category": "Pans",
        "main_category": "Cookware",
        "brand": "CookMaster",
        "product_image": "https://example.com/images/non_stick_frying_pan.jpg",
        "supplier": {
            "id": "S001",
            "name": "CookMaster Ltd.",
            "email": "support@cookmaster.com",
            "phone": "+1000000001"
        },
        "stock_description": {
            "product_id": "C001",
            "stock_quantity": 200,
            "expiry_date": "N/A",
            "critical_quantity": 25
        }
    },
    {
        "id": "C002",
        "product_name": "Stainless Steel Saucepan",
        "category": "Saucepans",
        "main_category": "Cookware",
        "brand": "SteelCook",
        "product_image": "https://example.com/images/stainless_steel_saucepan.jpg",
        "supplier": {
            "id": "S002",
            "name": "SteelCook Ltd.",
            "email": "contact@steelcook.com",
            "phone": "+1000000002"
        },
        "stock_description": {
            "product_id": "C002",
            "stock_quantity": 150,
            "expiry_date": "N/A",
            "critical_quantity": 20
        }
    },
    {
        "id": "C003",
        "product_name": "Cast Iron Dutch Oven",
        "category": "Dutch Ovens",
        "main_category": "Cookware",
        "brand": "IronChef",
        "product_image": "https://example.com/images/cast_iron_dutch_oven.jpg",
        "supplier": {
            "id": "S003",
            "name": "IronChef Ltd.",
            "email": "sales@ironchef.com",
            "phone": "+1000000003"
        },
        "stock_description": {
            "product_id": "C003",
            "stock_quantity": 80,
            "expiry_date": "N/A",
            "critical_quantity": 15
        }
    },
    {
        "id": "C004",
        "product_name": "Ceramic Cookware Set",
        "category": "Cookware Sets",
        "main_category": "Cookware",
        "brand": "CeramiCook",
        "product_image": "https://example.com/images/ceramic_cookware_set.jpg",
        "supplier": {
            "id": "S004",
            "name": "CeramiCook Ltd.",
            "email": "info@ceramiccook.com",
            "phone": "+1000000004"
        },
        "stock_description": {
            "product_id": "C004",
            "stock_quantity": 60,
            "expiry_date": "N/A",
            "critical_quantity": 10
        }
    },
    {
        "id": "C005",
        "product_name": "Aluminum Stock Pot",
        "category": "Stock Pots",
        "main_category": "Cookware",
        "brand": "AluCook",
        "product_image": "https://example.com/images/aluminum_stock_pot.jpg",
        "supplier": {
            "id": "S005",
            "name": "AluCook Ltd.",
            "email": "support@alucook.com",
            "phone": "+1000000005"
        },
        "stock_description": {
            "product_id": "C005",
            "stock_quantity": 90,
            "expiry_date": "N/A",
            "critical_quantity": 12
        }
    },
    {
        "id": "C006",
        "product_name": "Copper Skillet",
        "category": "Skillets",
        "main_category": "Cookware",
        "brand": "CopperCook",
        "product_image": "https://example.com/images/copper_skillet.jpg",
        "supplier": {
            "id": "S006",
            "name": "CopperCook Ltd.",
            "email": "contact@coppercook.com",
            "phone": "+1000000006"
        },
        "stock_description": {
            "product_id": "C006",
            "stock_quantity": 70,
            "expiry_date": "N/A",
            "critical_quantity": 8
        }
    },
    {
        "id": "C007",
        "product_name": "Glass Baking Dish",
        "category": "Baking Dishes",
        "main_category": "Cookware",
        "brand": "GlassCook",
        "product_image": "https://example.com/images/glass_baking_dish.jpg",
        "supplier": {
            "id": "S007",
            "name": "GlassCook Ltd.",
            "email": "info@glasscook.com",
            "phone": "+1000000007"
        },
        "stock_description": {
            "product_id": "C007",
            "stock_quantity": 110,
            "expiry_date": "N/A",
            "critical_quantity": 18
        }
    },
    {
        "id": "C008",
        "product_name": "Enamelled Cast Iron Pan",
        "category": "Pans",
        "main_category": "Cookware",
        "brand": "EnamelCook",
        "product_image": "https://example.com/images/enamelled_cast_iron_pan.jpg",
        "supplier": {
            "id": "S008",
            "name": "EnamelCook Ltd.",
            "email": "contact@enamelcook.com",
            "phone": "+1000000008"
        },
        "stock_description": {
            "product_id": "C008",
            "stock_quantity": 65,
            "expiry_date": "N/A",
            "critical_quantity": 10
        }
    },
    {
        "id": "C009",
        "product_name": "Induction Cookware Set",
        "category": "Cookware Sets",
        "main_category": "Cookware",
        "brand": "InductoCook",
        "product_image": "https://example.com/images/induction_cookware_set.jpg",
        "supplier": {
            "id": "S009",
            "name": "InductoCook Ltd.",
            "email": "sales@inductocook.com",
            "phone": "+1000000009"
        },
        "stock_description": {
            "product_id": "C009",
            "stock_quantity": 40,
            "expiry_date": "N/A",
            "critical_quantity": 8
        }
    },
    {
        "id": "C010",
        "product_name": "Stainless Steel Stock Pot",
        "category": "Stock Pots",
        "main_category": "Cookware",
        "brand": "SteelStock",
        "product_image": "https://example.com/images/stainless_steel_stock_pot.jpg",
        "supplier": {
            "id": "S010",
            "name": "SteelStock Ltd.",
            "email": "contact@steelstock.com",
            "phone": "+1000000010"
        },
        "stock_description": {
            "product_id": "C010",
            "stock_quantity": 85,
            "expiry_date": "N/A",
            "critical_quantity": 15
        }
    },
    {
        "id": "C011",
        "product_name": "Teflon Grill Pan",
        "category": "Grill Pans",
        "main_category": "Cookware",
        "brand": "TeflonGrill",
        "product_image": "https://example.com/images/teflon_grill_pan.jpg",
        "supplier": {
            "id": "S011",
            "name": "TeflonGrill Ltd.",
            "email": "info@teflongrill.com",
            "phone": "+1000000011"
        },
        "stock_description": {
            "product_id": "C011",
            "stock_quantity": 75,
            "expiry_date": "N/A",
            "critical_quantity": 12
        }
    },
    {
        "id": "C012",
        "product_name": "Bamboo Steamer",
        "category": "Steamers",
        "main_category": "Cookware",
        "brand": "BambooCook",
        "product_image": "https://example.com/images/bamboo_steamer.jpg",
        "supplier": {
            "id": "S012",
            "name": "BambooCook Ltd.",
            "email": "contact@bamboocook.com",
            "phone": "+1000000012"
        },
        "stock_description": {
            "product_id": "C012",
            "stock_quantity": 50,
            "expiry_date": "N/A",
            "critical_quantity": 8
        }
    },
    {
        "id": "C013",
        "product_name": "Double Boiler",
        "category": "Double Boilers",
        "main_category": "Cookware",
        "brand": "BoilMaster",
        "product_image": "https://example.com/images/double_boiler.jpg",
        "supplier": {
            "id": "S013",
            "name": "BoilMaster Ltd.",
            "email": "info@boilmaster.com",
            "phone": "+1000000013"
        },
        "stock_description": {
            "product_id": "C013",
            "stock_quantity": 55,
            "expiry_date": "N/A",
            "critical_quantity": 10
        }
    },
    {
        "id": "C014",
        "product_name": "Cast Iron Skillet",
        "category": "Skillets",
        "main_category": "Cookware",
        "brand": "IronSkillet",
        "product_image": "https://example.com/images/cast_iron_skillet.jpg",
        "supplier": {
            "id": "S014",
            "name": "IronSkillet Ltd.",
            "email": "contact@ironskillet.com",
            "phone": "+1000000014"
        },
        "stock_description": {
            "product_id": "C014",
            "stock_quantity": 60,
            "expiry_date": "N/A",
            "critical_quantity": 10
        }
    },
    {
        "id": "C015",
        "product_name": "Copper Saucepan",
        "category": "Saucepans",
        "main_category": "Cookware",
        "brand": "CopperSauce",
        "product_image": "https://example.com/images/copper_saucepan.jpg",
        "supplier": {
            "id": "S015",
            "name": "CopperSauce Ltd.",
            "email": "info@coppersauce.com",
            "phone": "+1000000015"
        },
        "stock_description": {
            "product_id": "C015",
            "stock_quantity": 85,
            "expiry_date": "N/A",
            "critical_quantity": 12
        }
    },
    {
        "id": "C016",
        "product_name": "Hard-Anodized Cookware Set",
        "category": "Cookware Sets",
        "main_category": "Cookware",
        "brand": "HardCook",
        "product_image": "https://example.com/images/hard_anodized_cookware_set.jpg",
        "supplier": {
            "id": "S016",
            "name": "HardCook Ltd.",
            "email": "contact@hardcook.com",
            "phone": "+1000000016"
        },
        "stock_description": {
            "product_id": "C016",
            "stock_quantity": 45,
            "expiry_date": "N/A",
            "critical_quantity": 10
        }
    },
    {
        "id": "C017",
        "product_name": "Granite Frying Pan",
        "category": "Pans",
        "main_category": "Cookware",
        "brand": "GraniteCook",
        "product_image": "https://example.com/images/granite_frying_pan.jpg",
        "supplier": {
            "id": "S017",
            "name": "GraniteCook Ltd.",
            "email": "support@granitecook.com",
            "phone": "+1000000017"
        },
        "stock_description": {
            "product_id": "C017",
            "stock_quantity": 100,
            "expiry_date": "N/A",
            "critical_quantity": 15
        }
    },
    {
        "id": "C018",
        "product_name": "Non-Stick Wok",
        "category": "Woks",
        "main_category": "Cookware",
        "brand": "WokMaster",
        "product_image": "https://example.com/images/non_stick_wok.jpg",
        "supplier": {
            "id": "S018",
            "name": "WokMaster Ltd.",
            "email": "info@wokmaster.com",
            "phone": "+1000000018"
        },
        "stock_description": {
            "product_id": "C018",
            "stock_quantity": 80,
            "expiry_date": "N/A",
            "critical_quantity": 12
        }
    },
    {
        "id": "C019",
        "product_name": "Stainless Steel Roasting Pan",
        "category": "Roasting Pans",
        "main_category": "Cookware",
        "brand": "RoastSteel",
        "product_image": "https://example.com/images/stainless_steel_roasting_pan.jpg",
        "supplier": {
            "id": "S019",
            "name": "RoastSteel Ltd.",
            "email": "contact@roaststeel.com",
            "phone": "+1000000019"
        },
        "stock_description": {
            "product_id": "C019",
            "stock_quantity": 70,
            "expiry_date": "N/A",
            "critical_quantity": 10
        }
    },
    {
        "id": "C020",
        "product_name": "Multi-Cooker",
        "category": "Multi-Cookers",
        "main_category": "Cookware",
        "brand": "MultiCook",
        "product_image": "https://example.com/images/multi_cooker.jpg",
        "supplier": {
            "id": "S020",
            "name": "MultiCook Ltd.",
            "email": "info@multicook.com",
            "phone": "+1000000020"
        },
        "stock_description": {
            "product_id": "C020",
            "stock_quantity": 55,
            "expiry_date": "N/A",
            "critical_quantity": 8
        }
    },
    {
        "id": "C021",
        "product_name": "Silicone Baking Mat",
        "category": "Baking Mats",
        "main_category": "Cookware",
        "brand": "SiliconeBake",
        "product_image": "https://example.com/images/silicone_baking_mat.jpg",
        "supplier": {
            "id": "S021",
            "name": "SiliconeBake Ltd.",
            "email": "support@siliconebake.com",
            "phone": "+1000000021"
        },
        "stock_description": {
            "product_id": "C021",
            "stock_quantity": 120,
            "expiry_date": "N/A",
            "critical_quantity": 20
        }
    },
    {
        "id": "C022",
        "product_name": "Stainless Steel Skillet",
        "category": "Skillets",
        "main_category": "Cookware",
        "brand": "SteelSkillet",
        "product_image": "https://example.com/images/stainless_steel_skillet.jpg",
        "supplier": {
            "id": "S022",
            "name": "SteelSkillet Ltd.",
            "email": "contact@steelskillet.com",
            "phone": "+1000000022"
        },
        "stock_description": {
            "product_id": "C022",
            "stock_quantity": 90,
            "expiry_date": "N/A",
            "critical_quantity": 12
        }
    },
    {
        "id": "C023",
        "product_name": "Pressure Cooker",
        "category": "Pressure Cookers",
        "main_category": "Cookware",
        "brand": "PressureCook",
        "product_image": "https://example.com/images/pressure_cooker.jpg",
        "supplier": {
            "id": "S023",
            "name": "PressureCook Ltd.",
            "email": "info@pressurecook.com",
            "phone": "+1000000023"
        },
        "stock_description": {
            "product_id": "C023",
            "stock_quantity": 75,
            "expiry_date": "N/A",
            "critical_quantity": 10
        }
    },
    {
        "id": "C024",
        "product_name": "Ceramic Baking Dish",
        "category": "Baking Dishes",
        "main_category": "Cookware",
        "brand": "CeramicBake",
        "product_image": "https://example.com/images/ceramic_baking_dish.jpg",
        "supplier": {
            "id": "S024",
            "name": "CeramicBake Ltd.",
            "email": "sales@ceramicbake.com",
            "phone": "+1000000024"
        },
        "stock_description": {
            "product_id": "C024",
            "stock_quantity": 85,
            "expiry_date": "N/A",
            "critical_quantity": 12
        }
    },
    {
        "id": "C025",
        "product_name": "Oven Mitts",
        "category": "Kitchen Accessories",
        "main_category": "Cookware",
        "brand": "CookMitts",
        "product_image": "https://example.com/images/oven_mitts.jpg",
        "supplier": {
            "id": "S025",
            "name": "CookMitts Ltd.",
            "email": "info@cookmitts.com",
            "phone": "+1000000025"
        },
        "stock_description": {
            "product_id": "C025",
            "stock_quantity": 130,
            "expiry_date": "N/A",
            "critical_quantity": 18
        }
    },
    {
        "id": "C026",
        "product_name": "Lid Organizer",
        "category": "Kitchen Organizers",
        "main_category": "Cookware",
        "brand": "LidOrganizer",
        "product_image": "https://example.com/images/lid_organizer.jpg",
        "supplier": {
            "id": "S026",
            "name": "LidOrganizer Ltd.",
            "email": "support@lidorganizer.com",
            "phone": "+1000000026"
        },
        "stock_description": {
            "product_id": "C026",
            "stock_quantity": 60,
            "expiry_date": "N/A",
            "critical_quantity": 8
        }
    },
    {
        "id": "C027",
        "product_name": "Bamboo Utensil Set",
        "category": "Utensils",
        "main_category": "Cookware",
        "brand": "BambooUtensil",
        "product_image": "https://example.com/images/bamboo_utensil_set.jpg",
        "supplier": {
            "id": "S027",
            "name": "BambooUtensil Ltd.",
            "email": "contact@bambooutensil.com",
            "phone": "+1000000027"
        },
        "stock_description": {
            "product_id": "C027",
            "stock_quantity": 90,
            "expiry_date": "N/A",
            "critical_quantity": 12
        }
    },
    {
        "id": "C028",
        "product_name": "Stainless Steel Colander",
        "category": "Colanders",
        "main_category": "Cookware",
        "brand": "SteelColander",
        "product_image": "https://example.com/images/stainless_steel_colander.jpg",
        "supplier": {
            "id": "S028",
            "name": "SteelColander Ltd.",
            "email": "info@steelcolander.com",
            "phone": "+1000000028"
        },
        "stock_description": {
            "product_id": "C028",
            "stock_quantity": 110,
            "expiry_date": "N/A",
            "critical_quantity": 15
        }
    },
    {
        "id": "C029",
        "product_name": "Copper Stock Pot",
        "category": "Stock Pots",
        "main_category": "Cookware",
        "brand": "CopperStock",
        "product_image": "https://example.com/images/copper_stock_pot.jpg",
        "supplier": {
            "id": "S029",
            "name": "CopperStock Ltd.",
            "email": "contact@copperstock.com",
            "phone": "+1000000029"
        },
        "stock_description": {
            "product_id": "C029",
            "stock_quantity": 50,
            "expiry_date": "N/A",
            "critical_quantity": 8
        }
    },
    {
        "id": "C030",
        "product_name": "Glass Mixing Bowl Set",
        "category": "Mixing Bowls",
        "main_category": "Cookware",
        "brand": "GlassMix",
        "product_image": "https://example.com/images/glass_mixing_bowl_set.jpg",
        "supplier": {
            "id": "S030",
            "name": "GlassMix Ltd.",
            "email": "info@glassmix.com",
            "phone": "+1000000030"
        },
        "stock_description": {
            "product_id": "C030",
            "stock_quantity": 95,
            "expiry_date": "N/A",
            "critical_quantity": 12
        }
    },
    {
        "id": "C031",
        "product_name": "Stainless Steel Griddle",
        "category": "Griddles",
        "main_category": "Cookware",
        "brand": "SteelGriddle",
        "product_image": "https://example.com/images/stainless_steel_griddle.jpg",
        "supplier": {
            "id": "S031",
            "name": "SteelGriddle Ltd.",
            "email": "contact@steelgriddle.com",
            "phone": "+1000000031"
        },
        "stock_description": {
            "product_id": "C031",
            "stock_quantity": 65,
            "expiry_date": "N/A",
            "critical_quantity": 10
        }
    },
    {
        "id": "C032",
        "product_name": "Silicone Cooking Utensils",
        "category": "Utensils",
        "main_category": "Cookware",
        "brand": "SiliconeUtensil",
        "product_image": "https://example.com/images/silicone_cooking_utensils.jpg",
        "supplier": {
            "id": "S032",
            "name": "SiliconeUtensil Ltd.",
            "email": "contact@siliconeutensil.com",
            "phone": "+1000000032"
        },
        "stock_description": {
            "product_id": "C032",
            "stock_quantity": 80,
            "expiry_date": "N/A",
            "critical_quantity": 10
        }
    },
    {
        "id": "C033",
        "product_name": "Baking Pan Set",
        "category": "Baking Pans",
        "main_category": "Cookware",
        "brand": "BakeMaster",
        "product_image": "https://example.com/images/baking_pan_set.jpg",
        "supplier": {
            "id": "S033",
            "name": "BakeMaster Ltd.",
            "email": "support@bakemaster.com",
            "phone": "+1000000033"
        },
        "stock_description": {
            "product_id": "C033",
            "stock_quantity": 90,
            "expiry_date": "N/A",
            "critical_quantity": 15
        }
    },
    {
        "id": "C034",
        "product_name": "Electric Kettle",
        "category": "Electric Kettles",
        "main_category": "Cookware",
        "brand": "KettleCook",
        "product_image": "https://example.com/images/electric_kettle.jpg",
        "supplier": {
            "id": "S034",
            "name": "KettleCook Ltd.",
            "email": "info@kettlecook.com",
            "phone": "+1000000034"
        },
        "stock_description": {
            "product_id": "C034",
            "stock_quantity": 40,
            "expiry_date": "N/A",
            "critical_quantity": 8
        }
    },
    {
        "id": "C035",
        "product_name": "Stainless Steel Pasta Pot",
        "category": "Pasta Pots",
        "main_category": "Cookware",
        "brand": "PastaCook",
        "product_image": "https://example.com/images/stainless_steel_pasta_pot.jpg",
        "supplier": {
            "id": "S035",
            "name": "PastaCook Ltd.",
            "email": "contact@pastacook.com",
            "phone": "+1000000035"
        },
        "stock_description": {
            "product_id": "C035",
            "stock_quantity": 65,
            "expiry_date": "N/A",
            "critical_quantity": 10
        }
    },
    {
        "id": "C036",
        "product_name": "Silicone Baking Molds",
        "category": "Baking Molds",
        "main_category": "Cookware",
        "brand": "SiliconeBake",
        "product_image": "https://example.com/images/silicone_baking_molds.jpg",
        "supplier": {
            "id": "S036",
            "name": "SiliconeBake Ltd.",
            "email": "support@siliconebake.com",
            "phone": "+1000000036"
        },
        "stock_description": {
            "product_id": "C036",
            "stock_quantity": 75,
            "expiry_date": "N/A",
            "critical_quantity": 10
        }
    },
    {
        "id": "C037",
        "product_name": "Non-Stick Baking Sheet",
        "category": "Baking Sheets",
        "main_category": "Cookware",
        "brand": "BakeSheet",
        "product_image": "https://example.com/images/non_stick_baking_sheet.jpg",
        "supplier": {
            "id": "S037",
            "name": "BakeSheet Ltd.",
            "email": "info@bakesheet.com",
            "phone": "+1000000037"
        },
        "stock_description": {
            "product_id": "C037",
            "stock_quantity": 90,
            "expiry_date": "N/A",
            "critical_quantity": 12
        }
    },
    {
        "id": "C038",
        "product_name": "Cast Iron Skillet Set",
        "category": "Skillet Sets",
        "main_category": "Cookware",
        "brand": "CastIronSet",
        "product_image": "https://example.com/images/cast_iron_skillet_set.jpg",
        "supplier": {
            "id": "S038",
            "name": "CastIronSet Ltd.",
            "email": "support@castironset.com",
            "phone": "+1000000038"
        },
        "stock_description": {
            "product_id": "C038",
            "stock_quantity": 55,
            "expiry_date": "N/A",
            "critical_quantity": 10
        }
    },
    {
        "id": "C039",
        "product_name": "Aluminum Frying Pan",
        "category": "Pans",
        "main_category": "Cookware",
        "brand": "AluFry",
        "product_image": "https://example.com/images/aluminum_frying_pan.jpg",
        "supplier": {
            "id": "S039",
            "name": "AluFry Ltd.",
            "email": "info@alufry.com",
            "phone": "+1000000039"
        },
        "stock_description": {
            "product_id": "C039",
            "stock_quantity": 100,
            "expiry_date": "N/A",
            "critical_quantity": 15
        }
    },
    {
        "id": "C040",
        "product_name": "Granite Cookware Set",
        "category": "Cookware Sets",
        "main_category": "Cookware",
        "brand": "GraniteCook",
        "product_image": "https://example.com/images/granite_cookware_set.jpg",
        "supplier": {
            "id": "S040",
            "name": "GraniteCook Ltd.",
            "email": "support@granitecook.com",
            "phone": "+1000000040"
        },
        "stock_description": {
            "product_id": "C040",
            "stock_quantity": 55,
            "expiry_date": "N/A",
            "critical_quantity": 10
        }
    },
    {
        "id": "C041",
        "product_name": "Wooden Cutting Board",
        "category": "Cutting Boards",
        "main_category": "Kitchen",
        "brand": "WoodCut",
        "product_image": "https://example.com/images/wooden_cutting_board.jpg",
        "supplier": {
            "id": "S041",
            "name": "WoodCut Ltd.",
            "email": "info@woodcut.com",
            "phone": "+1000000041"
        },
        "stock_description": {
            "product_id": "C041",
            "stock_quantity": 85,
            "expiry_date": "N/A",
            "critical_quantity": 15
        }
    },
    {
        "id": "C042",
        "product_name": "Glass Pitcher",
        "category": "Pitchers",
        "main_category": "Kitchen",
        "brand": "GlassPitch",
        "product_image": "https://example.com/images/glass_pitcher.jpg",
        "supplier": {
            "id": "S042",
            "name": "GlassPitch Ltd.",
            "email": "support@glasspitch.com",
            "phone": "+1000000042"
        },
        "stock_description": {
            "product_id": "C042",
            "stock_quantity": 90,
            "expiry_date": "N/A",
            "critical_quantity": 10
        }
    },
    {
        "id": "C043",
        "product_name": "Ceramic Knife Set",
        "category": "Knife Sets",
        "main_category": "Kitchen",
        "brand": "CeramicKnife",
        "product_image": "https://example.com/images/ceramic_knife_set.jpg",
        "supplier": {
            "id": "S043",
            "name": "CeramicKnife Ltd.",
            "email": "contact@ceramicknife.com",
            "phone": "+1000000043"
        },
        "stock_description": {
            "product_id": "C043",
            "stock_quantity": 75,
            "expiry_date": "N/A",
            "critical_quantity": 8
        }
    },
    {
        "id": "C044",
        "product_name": "Stainless Steel Canister Set",
        "category": "Canisters",
        "main_category": "Kitchen",
        "brand": "SteelCanister",
        "product_image": "https://example.com/images/stainless_steel_canister_set.jpg",
        "supplier": {
            "id": "S044",
            "name": "SteelCanister Ltd.",
            "email": "support@steelcanister.com",
            "phone": "+1000000044"
        },
        "stock_description": {
            "product_id": "C044",
            "stock_quantity": 60,
            "expiry_date": "N/A",
            "critical_quantity": 10
        }
    },
    {
        "id": "C045",
        "product_name": "Reversible Cutting Board",
        "category": "Cutting Boards",
        "main_category": "Kitchen",
        "brand": "ReversibleCut",
        "product_image": "https://example.com/images/reversible_cutting_board.jpg",
        "supplier": {
            "id": "S045",
            "name": "ReversibleCut Ltd.",
            "email": "contact@reversiblecut.com",
            "phone": "+1000000045"
        },
        "stock_description": {
            "product_id": "C045",
            "stock_quantity": 70,
            "expiry_date": "N/A",
            "critical_quantity": 12
        }
    },
    {
        "id": "C046",
        "product_name": "Electric Grinder",
        "category": "Grinders",
        "main_category": "Kitchen",
        "brand": "GrindMaster",
        "product_image": "https://example.com/images/electric_grinder.jpg",
        "supplier": {
            "id": "S046",
            "name": "GrindMaster Ltd.",
            "email": "info@grindmaster.com",
            "phone": "+1000000046"
        },
        "stock_description": {
            "product_id": "C046",
            "stock_quantity": 80,
            "expiry_date": "N/A",
            "critical_quantity": 10
        }
    },
    {
        "id": "C047",
        "product_name": "Vegetable Peeler",
        "category": "Peelers",
        "main_category": "Kitchen",
        "brand": "PeelMaster",
        "product_image": "https://example.com/images/vegetable_peeler.jpg",
        "supplier": {
            "id": "S047",
            "name": "PeelMaster Ltd.",
            "email": "contact@peelmaster.com",
            "phone": "+1000000047"
        },
        "stock_description": {
            "product_id": "C047",
            "stock_quantity": 110,
            "expiry_date": "N/A",
            "critical_quantity": 15
        }
    },
    {
        "id": "C048",
        "product_name": "Wine Opener",
        "category": "Wine Accessories",
        "main_category": "Kitchen",
        "brand": "WineOpener",
        "product_image": "https://example.com/images/wine_opener.jpg",
        "supplier": {
            "id": "S048",
            "name": "WineOpener Ltd.",
            "email": "contact@wineopener.com",
            "phone": "+1000000048"
        },
        "stock_description": {
            "product_id": "C048",
            "stock_quantity": 95,
            "expiry_date": "N/A",
            "critical_quantity": 12
        }
    },
    {
        "id": "C049",
        "product_name": "Cheese Grater",
        "category": "Graters",
        "main_category": "Kitchen",
        "brand": "CheeseGrate",
        "product_image": "https://example.com/images/cheese_grater.jpg",
        "supplier": {
            "id": "S049",
            "name": "CheeseGrate Ltd.",
            "email": "info@cheesegrate.com",
            "phone": "+1000000049"
        },
        "stock_description": {
            "product_id": "C049",
            "stock_quantity": 120,
            "expiry_date": "N/A",
            "critical_quantity": 15
        }
    },
    {
        "id": "C050",
        "product_name": "Pizza Cutter",
        "category": "Pizza Accessories",
        "main_category": "Kitchen",
        "brand": "PizzaCut",
        "product_image": "https://example.com/images/pizza_cutter.jpg",
        "supplier": {
            "id": "S050",
            "name": "PizzaCut Ltd.",
            "email": "contact@pizzacut.com",
            "phone": "+1000000050"
        },
        "stock_description": {
            "product_id": "C050",
            "stock_quantity": 70,
            "expiry_date": "N/A",
            "critical_quantity": 10
        }
    },
    {
        "id": "S001",
        "product_name": "Ballpoint Pen",
        "category": "Pens",
        "main_category": "Stationary",
        "brand": "QuickWrite",
        "product_image": "https://example.com/images/ballpoint_pen.jpg",
        "supplier": {
            "id": "P001",
            "name": "QuickWrite Ltd.",
            "email": "contact@quickwrite.com",
            "phone": "+1000000001"
        },
        "stock_description": {
            "product_id": "S001",
            "stock_quantity": 150,
            "expiry_date": "N/A",
            "critical_quantity": 20
        }
    },
    {
        "id": "S002",
        "product_name": "Notebook",
        "category": "Notebooks",
        "main_category": "Stationary",
        "brand": "NoteMaster",
        "product_image": "https://example.com/images/notebook.jpg",
        "supplier": {
            "id": "P002",
            "name": "NoteMaster Ltd.",
            "email": "info@notemaster.com",
            "phone": "+1000000002"
        },
        "stock_description": {
            "product_id": "S002",
            "stock_quantity": 200,
            "expiry_date": "N/A",
            "critical_quantity": 25
        }
    },
    {
        "id": "S003",
        "product_name": "Stapler",
        "category": "Office Supplies",
        "main_category": "Stationary",
        "brand": "StaplePro",
        "product_image": "https://example.com/images/stapler.jpg",
        "supplier": {
            "id": "P003",
            "name": "StaplePro Ltd.",
            "email": "support@staplepro.com",
            "phone": "+1000000003"
        },
        "stock_description": {
            "product_id": "S003",
            "stock_quantity": 80,
            "expiry_date": "N/A",
            "critical_quantity": 15
        }
    },
    {
        "id": "S004",
        "product_name": "Highlighter Set",
        "category": "Highlighters",
        "main_category": "Stationary",
        "brand": "BrightMark",
        "product_image": "https://example.com/images/highlighter_set.jpg",
        "supplier": {
            "id": "P004",
            "name": "BrightMark Ltd.",
            "email": "contact@brightmark.com",
            "phone": "+1000000004"
        },
        "stock_description": {
            "product_id": "S004",
            "stock_quantity": 120,
            "expiry_date": "N/A",
            "critical_quantity": 18
        }
    },
    {
        "id": "S005",
        "product_name": "Paper Clips",
        "category": "Clips",
        "main_category": "Stationary",
        "brand": "ClipMaster",
        "product_image": "https://example.com/images/paper_clips.jpg",
        "supplier": {
            "id": "P005",
            "name": "ClipMaster Ltd.",
            "email": "support@clipmaster.com",
            "phone": "+1000000005"
        },
        "stock_description": {
            "product_id": "S005",
            "stock_quantity": 500,
            "expiry_date": "N/A",
            "critical_quantity": 50
        }
    },
    {
        "id": "S006",
        "product_name": "Eraser",
        "category": "Erasers",
        "main_category": "Stationary",
        "brand": "EraseIt",
        "product_image": "https://example.com/images/eraser.jpg",
        "supplier": {
            "id": "P006",
            "name": "EraseIt Ltd.",
            "email": "info@eraseit.com",
            "phone": "+1000000006"
        },
        "stock_description": {
            "product_id": "S006",
            "stock_quantity": 300,
            "expiry_date": "N/A",
            "critical_quantity": 30
        }
    },
    {
        "id": "S007",
        "product_name": "Desk Organizer",
        "category": "Desk Accessories",
        "main_category": "Stationary",
        "brand": "DeskMate",
        "product_image": "https://example.com/images/desk_organizer.jpg",
        "supplier": {
            "id": "P007",
            "name": "DeskMate Ltd.",
            "email": "contact@deskmate.com",
            "phone": "+1000000007"
        },
        "stock_description": {
            "product_id": "S007",
            "stock_quantity": 60,
            "expiry_date": "N/A",
            "critical_quantity": 10
        }
    },
    {
        "id": "S008",
        "product_name": "Sticky Notes",
        "category": "Notes",
        "main_category": "Stationary",
        "brand": "StickIt",
        "product_image": "https://example.com/images/sticky_notes.jpg",
        "supplier": {
            "id": "P008",
            "name": "StickIt Ltd.",
            "email": "support@stickit.com",
            "phone": "+1000000008"
        },
        "stock_description": {
            "product_id": "S008",
            "stock_quantity": 200,
            "expiry_date": "N/A",
            "critical_quantity": 20
        }
    },
    {
        "id": "S009",
        "product_name": "Binder",
        "category": "Binders",
        "main_category": "Stationary",
        "brand": "BindMaster",
        "product_image": "https://example.com/images/binder.jpg",
        "supplier": {
            "id": "P009",
            "name": "BindMaster Ltd.",
            "email": "info@bindmaster.com",
            "phone": "+1000000009"
        },
        "stock_description": {
            "product_id": "S009",
            "stock_quantity": 80,
            "expiry_date": "N/A",
            "critical_quantity": 12
        }
    },
    {
        "id": "S010",
        "product_name": "Calculator",
        "category": "Calculators",
        "main_category": "Stationary",
        "brand": "CalcPro",
        "product_image": "https://example.com/images/calculator.jpg",
        "supplier": {
            "id": "P010",
            "name": "CalcPro Ltd.",
            "email": "contact@calcpro.com",
            "phone": "+1000000010"
        },
        "stock_description": {
            "product_id": "S010",
            "stock_quantity": 70,
            "expiry_date": "N/A",
            "critical_quantity": 15
        }
    },
    {
        "id": "S011",
        "product_name": "Ruler",
        "category": "Rulers",
        "main_category": "Stationary",
        "brand": "MeasureIt",
        "product_image": "https://example.com/images/ruler.jpg",
        "supplier": {
            "id": "P011",
            "name": "MeasureIt Ltd.",
            "email": "support@measureit.com",
            "phone": "+1000000011"
        },
        "stock_description": {
            "product_id": "S011",
            "stock_quantity": 150,
            "expiry_date": "N/A",
            "critical_quantity": 20
        }
    },
    {
        "id": "S012",
        "product_name": "Paper Cutter",
        "category": "Cutters",
        "main_category": "Stationary",
        "brand": "SharpCut",
        "product_image": "https://example.com/images/paper_cutter.jpg",
        "supplier": {
            "id": "P012",
            "name": "SharpCut Ltd.",
            "email": "contact@sharpcut.com",
            "phone": "+1000000012"
        },
        "stock_description": {
            "product_id": "S012",
            "stock_quantity": 40,
            "expiry_date": "N/A",
            "critical_quantity": 8
        }
    },
    {
        "id": "S013",
        "product_name": "Whiteboard Marker",
        "category": "Markers",
        "main_category": "Stationary",
        "brand": "WhiteMark",
        "product_image": "https://example.com/images/whiteboard_marker.jpg",
        "supplier": {
            "id": "P013",
            "name": "WhiteMark Ltd.",
            "email": "support@whitemark.com",
            "phone": "+1000000013"
        },
        "stock_description": {
            "product_id": "S013",
            "stock_quantity": 250,
            "expiry_date": "N/A",
            "critical_quantity": 30
        }
    },
    {
        "id": "S014",
        "product_name": "Glue Stick",
        "category": "Adhesives",
        "main_category": "Stationary",
        "brand": "StickGlue",
        "product_image": "https://example.com/images/glue_stick.jpg",
        "supplier": {
            "id": "P014",
            "name": "StickGlue Ltd.",
            "email": "info@stickglue.com",
            "phone": "+1000000014"
        },
        "stock_description": {
            "product_id": "S014",
            "stock_quantity": 180,
            "expiry_date": "N/A",
            "critical_quantity": 25
        }
    },
    {
        "id": "S015",
        "product_name": "Index Tabs",
        "category": "Tabs",
        "main_category": "Stationary",
        "brand": "TabMaster",
        "product_image": "https://example.com/images/index_tabs.jpg",
        "supplier": {
            "id": "P015",
            "name": "TabMaster Ltd.",
            "email": "contact@tabmaster.com",
            "phone": "+1000000015"
        },
        "stock_description": {
            "product_id": "S015",
            "stock_quantity": 90,
            "expiry_date": "N/A",
            "critical_quantity": 15
        }
    },
    {
        "id": "S016",
        "product_name": "Desk Calendar",
        "category": "Calendars",
        "main_category": "Stationary",
        "brand": "TimeMaster",
        "product_image": "https://example.com/images/desk_calendar.jpg",
        "supplier": {
            "id": "P016",
            "name": "TimeMaster Ltd.",
            "email": "info@timemaster.com",
            "phone": "+1000000016"
        },
        "stock_description": {
            "product_id": "S016",
            "stock_quantity": 130,
            "expiry_date": "N/A",
            "critical_quantity": 20
        }
    },
    {
        "id": "S017",
        "product_name": "Desk Lamp",
        "category": "Lighting",
        "main_category": "Stationary",
        "brand": "BrightDesk",
        "product_image": "https://example.com/images/desk_lamp.jpg",
        "supplier": {
            "id": "P017",
            "name": "BrightDesk Ltd.",
            "email": "support@brightdesk.com",
            "phone": "+1000000017"
        },
        "stock_description": {
            "product_id": "S017",
            "stock_quantity": 55,
            "expiry_date": "N/A",
            "critical_quantity": 10
        }
    },
    {
        "id": "S018",
        "product_name": "Rubber Bands",
        "category": "Bands",
        "main_category": "Stationary",
        "brand": "ElasticPro",
        "product_image": "https://example.com/images/rubber_bands.jpg",
        "supplier": {
            "id": "P018",
            "name": "ElasticPro Ltd.",
            "email": "contact@elasticpro.com",
            "phone": "+1000000018"
        },
        "stock_description": {
            "product_id": "S018",
            "stock_quantity": 300,
            "expiry_date": "N/A",
            "critical_quantity": 40
        }
    },
    {
        "id": "S019",
        "product_name": "Paper Shredder",
        "category": "Shredders",
        "main_category": "Stationary",
        "brand": "ShredMaster",
        "product_image": "https://example.com/images/paper_shredder.jpg",
        "supplier": {
            "id": "P019",
            "name": "ShredMaster Ltd.",
            "email": "support@shredmaster.com",
            "phone": "+1000000019"
        },
        "stock_description": {
            "product_id": "S019",
            "stock_quantity": 40,
            "expiry_date": "N/A",
            "critical_quantity": 8
        }
    },
    {
        "id": "S020",
        "product_name": "Marker Pen",
        "category": "Markers",
        "main_category": "Stationary",
        "brand": "MarkPro",
        "product_image": "https://example.com/images/marker_pen.jpg",
        "supplier": {
            "id": "P020",
            "name": "MarkPro Ltd.",
            "email": "info@markpro.com",
            "phone": "+1000000020"
        },
        "stock_description": {
            "product_id": "S020",
            "stock_quantity": 180,
            "expiry_date": "N/A",
            "critical_quantity": 25
        }
    },
    {
        "id": "S021",
        "product_name": "Paper Pad",
        "category": "Notepads",
        "main_category": "Stationary",
        "brand": "NotePad",
        "product_image": "https://example.com/images/paper_pad.jpg",
        "supplier": {
            "id": "P021",
            "name": "NotePad Ltd.",
            "email": "contact@notepad.com",
            "phone": "+1000000021"
        },
        "stock_description": {
            "product_id": "S021",
            "stock_quantity": 250,
            "expiry_date": "N/A",
            "critical_quantity": 30
        }
    },
    {
        "id": "S022",
        "product_name": "Clipboard",
        "category": "Clipboards",
        "main_category": "Stationary",
        "brand": "ClipBoardPro",
        "product_image": "https://example.com/images/clipboard.jpg",
        "supplier": {
            "id": "P022",
            "name": "ClipBoardPro Ltd.",
            "email": "support@clipboardpro.com",
            "phone": "+1000000022"
        },
        "stock_description": {
            "product_id": "S022",
            "stock_quantity": 70,
            "expiry_date": "N/A",
            "critical_quantity": 10
        }
    },
    {
        "id": "S023",
        "product_name": "Index Cards",
        "category": "Indexing",
        "main_category": "Stationary",
        "brand": "IndexPro",
        "product_image": "https://example.com/images/index_cards.jpg",
        "supplier": {
            "id": "P023",
            "name": "IndexPro Ltd.",
            "email": "info@indexpro.com",
            "phone": "+1000000023"
        },
        "stock_description": {
            "product_id": "S023",
            "stock_quantity": 300,
            "expiry_date": "N/A",
            "critical_quantity": 40
        }
    },
    {
        "id": "S024",
        "product_name": "Correction Tape",
        "category": "Correction Supplies",
        "main_category": "Stationary",
        "brand": "FixTape",
        "product_image": "https://example.com/images/correction_tape.jpg",
        "supplier": {
            "id": "P024",
            "name": "FixTape Ltd.",
            "email": "support@fixtape.com",
            "phone": "+1000000024"
        },
        "stock_description": {
            "product_id": "S024",
            "stock_quantity": 140,
            "expiry_date": "N/A",
            "critical_quantity": 20
        }
    },
    {
        "id": "S025",
        "product_name": "Envelope Pack",
        "category": "Envelopes",
        "main_category": "Stationary",
        "brand": "EnvPack",
        "product_image": "https://example.com/images/envelope_pack.jpg",
        "supplier": {
            "id": "P025",
            "name": "EnvPack Ltd.",
            "email": "contact@envpack.com",
            "phone": "+1000000025"
        },
        "stock_description": {
            "product_id": "S025",
            "stock_quantity": 250,
            "expiry_date": "N/A",
            "critical_quantity": 30
        }
    },
    {
        "id": "S026",
        "product_name": "Letter Opener",
        "category": "Office Tools",
        "main_category": "Stationary",
        "brand": "OpenMaster",
        "product_image": "https://example.com/images/letter_opener.jpg",
        "supplier": {
            "id": "P026",
            "name": "OpenMaster Ltd.",
            "email": "info@openmaster.com",
            "phone": "+1000000026"
        },
        "stock_description": {
            "product_id": "S026",
            "stock_quantity": 100,
            "expiry_date": "N/A",
            "critical_quantity": 15
        }
    },
    {
        "id": "S027",
        "product_name": "Post-It Notes",
        "category": "Sticky Notes",
        "main_category": "Stationary",
        "brand": "PostIt",
        "product_image": "https://example.com/images/postit_notes.jpg",
        "supplier": {
            "id": "P027",
            "name": "PostIt Ltd.",
            "email": "contact@postit.com",
            "phone": "+1000000027"
        },
        "stock_description": {
            "product_id": "S027",
            "stock_quantity": 180,
            "expiry_date": "N/A",
            "critical_quantity": 20
        }
    },
    {
        "id": "S028",
        "product_name": "Paper Clips Dispenser",
        "category": "Dispenser",
        "main_category": "Stationary",
        "brand": "ClipDispenser",
        "product_image": "https://example.com/images/paper_clips_dispenser.jpg",
        "supplier": {
            "id": "P028",
            "name": "ClipDispenser Ltd.",
            "email": "info@clipdispenser.com",
            "phone": "+1000000028"
        },
        "stock_description": {
            "product_id": "S028",
            "stock_quantity": 85,
            "expiry_date": "N/A",
            "critical_quantity": 12
        }
    },
    {
        "id": "S029",
        "product_name": "Binding Machine",
        "category": "Binding",
        "main_category": "Stationary",
        "brand": "BindPro",
        "product_image": "https://example.com/images/binding_machine.jpg",
        "supplier": {
            "id": "P029",
            "name": "BindPro Ltd.",
            "email": "contact@bindpro.com",
            "phone": "+1000000029"
        },
        "stock_description": {
            "product_id": "S029",
            "stock_quantity": 30,
            "expiry_date": "N/A",
            "critical_quantity": 5
        }
    },
    {
        "id": "S030",
        "product_name": "Clipboard with Storage",
        "category": "Clipboards",
        "main_category": "Stationary",
        "brand": "ClipStore",
        "product_image": "https://example.com/images/clipboard_storage.jpg",
        "supplier": {
            "id": "P030",
            "name": "ClipStore Ltd.",
            "email": "support@clipstore.com",
            "phone": "+1000000030"
        },
        "stock_description": {
            "product_id": "S030",
            "stock_quantity": 60,
            "expiry_date": "N/A",
            "critical_quantity": 10
        }
    },
    {
        "id": "S031",
        "product_name": "Index Divider",
        "category": "Dividers",
        "main_category": "Stationary",
        "brand": "IndexIt",
        "product_image": "https://example.com/images/index_divider.jpg",
        "supplier": {
            "id": "P031",
            "name": "IndexIt Ltd.",
            "email": "contact@indexit.com",
            "phone": "+1000000031"
        },
        "stock_description": {
            "product_id": "S031",
            "stock_quantity": 150,
            "expiry_date": "N/A",
            "critical_quantity": 20
        }
    },
    {
        "id": "S032",
        "product_name": "Scissors",
        "category": "Cutting Tools",
        "main_category": "Stationary",
        "brand": "SharpCut",
        "product_image": "https://example.com/images/scissors.jpg",
        "supplier": {
            "id": "P032",
            "name": "SharpCut Ltd.",
            "email": "info@sharpcut.com",
            "phone": "+1000000032"
        },
        "stock_description": {
            "product_id": "S032",
            "stock_quantity": 80,
            "expiry_date": "N/A",
            "critical_quantity": 15
        }
    },
    {
        "id": "S033",
        "product_name": "Puncher",
        "category": "Hole Punchers",
        "main_category": "Stationary",
        "brand": "PunchPro",
        "product_image": "https://example.com/images/puncher.jpg",
        "supplier": {
            "id": "P033",
            "name": "PunchPro Ltd.",
            "email": "contact@punchpro.com",
            "phone": "+1000000033"
        },
        "stock_description": {
            "product_id": "S033",
            "stock_quantity": 50,
            "expiry_date": "N/A",
            "critical_quantity": 10
        }
    },
    {
        "id": "S034",
        "product_name": "Calendar Planner",
        "category": "Planners",
        "main_category": "Stationary",
        "brand": "PlanMaster",
        "product_image": "https://example.com/images/calendar_planner.jpg",
        "supplier": {
            "id": "P034",
            "name": "PlanMaster Ltd.",
            "email": "info@planmaster.com",
            "phone": "+1000000034"
        },
        "stock_description": {
            "product_id": "S034",
            "stock_quantity": 90,
            "expiry_date": "N/A",
            "critical_quantity": 12
        }
    },
    {
        "id": "S035",
        "product_name": "Push Pins",
        "category": "Pins",
        "main_category": "Stationary",
        "brand": "PinMaster",
        "product_image": "https://example.com/images/push_pins.jpg",
        "supplier": {
            "id": "P035",
            "name": "PinMaster Ltd.",
            "email": "support@pinmaster.com",
            "phone": "+1000000035"
        },
        "stock_description": {
            "product_id": "S035",
            "stock_quantity": 400,
            "expiry_date": "N/A",
            "critical_quantity": 50
        }
    },
    {
        "id": "S036",
        "product_name": "Document Holder",
        "category": "Holders",
        "main_category": "Stationary",
        "brand": "DocHolder",
        "product_image": "https://example.com/images/document_holder.jpg",
        "supplier": {
            "id": "P036",
            "name": "DocHolder Ltd.",
            "email": "info@docholder.com",
            "phone": "+1000000036"
        },
        "stock_description": {
            "product_id": "S036",
            "stock_quantity": 60,
            "expiry_date": "N/A",
            "critical_quantity": 8
        }
    },
    {
        "id": "S037",
        "product_name": "Binder Clips",
        "category": "Clips",
        "main_category": "Stationary",
        "brand": "BindClip",
        "product_image": "https://example.com/images/binder_clips.jpg",
        "supplier": {
            "id": "P037",
            "name": "BindClip Ltd.",
            "email": "contact@bindclip.com",
            "phone": "+1000000037"
        },
        "stock_description": {
            "product_id": "S037",
            "stock_quantity": 250,
            "expiry_date": "N/A",
            "critical_quantity": 30
        }
    },
    {
        "id": "S038",
        "product_name": "Tack Boards",
        "category": "Boards",
        "main_category": "Stationary",
        "brand": "TackMaster",
        "product_image": "https://example.com/images/tack_boards.jpg",
        "supplier": {
            "id": "P038",
            "name": "TackMaster Ltd.",
            "email": "info@tackmaster.com",
            "phone": "+1000000038"
        },
        "stock_description": {
            "product_id": "S038",
            "stock_quantity": 45,
            "expiry_date": "N/A",
            "critical_quantity": 7
        }
    },
    {
        "id": "S039",
        "product_name": "Correction Fluid",
        "category": "Correction Supplies",
        "main_category": "Stationary",
        "brand": "FixFluid",
        "product_image": "https://example.com/images/correction_fluid.jpg",
        "supplier": {
            "id": "P039",
            "name": "FixFluid Ltd.",
            "email": "support@fixfluid.com",
            "phone": "+1000000039"
        },
        "stock_description": {
            "product_id": "S039",
            "stock_quantity": 200,
            "expiry_date": "N/A",
            "critical_quantity": 25
        }
    },
    {
        "id": "S040",
        "product_name": "Scotch Tape",
        "category": "Adhesives",
        "main_category": "Stationary",
        "brand": "ScotchPro",
        "product_image": "https://example.com/images/scotch_tape.jpg",
        "supplier": {
            "id": "P040",
            "name": "ScotchPro Ltd.",
            "email": "contact@scotchpro.com",
            "phone": "+1000000040"
        },
        "stock_description": {
            "product_id": "S040",
            "stock_quantity": 350,
            "expiry_date": "N/A",
            "critical_quantity": 40
        }
    }
]

module.exports = products;












