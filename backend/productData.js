
const products = [
    {
        "id": "P001",
        "product_name": "Organic Apple",
        "category": "Fruits",
        "main_category": "Grocery",
        "brand": "FreshFarm",
        "product_image": "https://avatars.mds.yandex.net/i?id=789bf3b0ed5ec70287cd5867ffe51a5d67fd526f482ac063-12731221-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=4651857d28444412613f101bb3afdeaba685bc88-8187788-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=207d2617380ab4cc72cea80afc8290c3bc3edde3-3663589-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=1da48e91d27c4c5a3f7d3a212d76098f94e04e8b-4452287-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=f83b533e1bfd62b63789fc8a508ddeb860bf7d10-9053088-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=26a33c98907d78c18e0b2dc56527f91261968650-9241287-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=c0d4dfcbccf73567f61deb9af5577faf26605a5b-4181939-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=35866257ecd50d28b24e3138215cdf0a06c6be83-10766871-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=f90be607b5e7a362951482b5694f368323446dfd-5232386-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=3dffc1824c7c0bedb75ef4919f0272867170ac5e-9813974-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=a6e9b35efe57b32fcb114456baaa2db639cdf7af24113d19-12503299-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=692f161798f34a160d3c2cb183cfa836e3700293-8287805-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=87c82c97aac7340f800acb51da1ee6c7-5878137-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=082a7c3a15eb009ef902c96591a7057f154c54bb-12398098-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=5a3e92137b994ba72b6f535ebb14337a5b957699-12011805-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=b040d317038100ebcf8b3f4c86489963292d2aad-10906089-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=681e74396388525f88025c1cd85996b92aa98b044b289c5f-10497918-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=ceecbedb227e0f2a3c83ad98a56f750a3b91399c-8485406-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=6d0fe580accb7e7c4fa022df3b76b9a893a98e73-13203964-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=e970c554bafb78750a3aea2755db72680c34fb7b-4554236-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=5d351c752d216360b6543606b2fcaeab-5745674-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=0cafdedde3e7bc728ee244a3dfa25ceea7f642d8-9228595-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=e5302658349f39b6d3d4c22f11ed6e48e6ceec1e-9112075-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=49a41de16cd53a1995ca5e878c489ca259d0f1c6-5539192-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=35f77c1317416e4dfa83f5c2b86c43aa-4439117-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=5757a4b680b3427aa93cb399994df1e7891736ab-5232111-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=ccd3ae7b760d2e3d321a24b95cffe6f09204fa4a-8497272-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=7665ed4d733925436c94fb4d755087a52a28eef6-5439913-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=c804706c976f7b35b6155f0902077f8ef5f1696f-12149467-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=668cdb99a57374246e31b4d4b43a7f3adc52648a-7992926-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=0c1e27673783ba4d97b1785327ff7500ba63a50e-4752054-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=f54808a5d46b7f3c80bd2537e8d5646345fdd484-9066494-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=40c32b3a7c79015657044762c50be3e8-5714674-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=026ee70148ade53fdc136555bf9e0603deb69a33-9858428-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=db45b2086bcbd3227e20beaa84f70be5-4012262-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=a914bf339ca061e3f4db834d59db471ec169bebecf43cb43-12501258-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=d426411f7a882e51ed4b0db76f56cd5c23db7bca-5268869-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=59b9e26b20960abe059ba3ec247d6ab4fc4972d2-8498443-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=0b47c387dda7776cae96a328a7b8cbad891af5a4-12513061-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=800d38fb2466066013f9c66415e7ea58ef583180-7546740-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=11e445b320cfe6677dd43009b7ad8a2f8f7b90f2c3d11f85-13081466-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=b065e9929f31cfde8438c90fb36be24ace0249a7-8211098-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=6b7be789b0b24db780c99a5ad0128883e4728d95-4615753-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=ab71c287b2a97d88e18624cf34b199267549fde2749ba24c-5876303-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=d5544cd63bb4e6103004953a3c0fe3edc490440b-12377907-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=be5fb6441c06489623ea1087e217e4524c694d81b9c2575c-5233011-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=2b11a0d0be11d4930b0a5111dd1384d603e9134d-4592723-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=9119d9808469cf9e9c146225a6e56800d58102d1-5242562-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=a7b763a78c752ed9578331196516c4a0189056b1-7662747-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=5b374b09c24ae6667c49b6f8b32a964edc3a4f7e-10090660-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=9b710a55925b93c12c08154524dc5a9e37bc19bd-12421995-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=896cc4adc3c018a5fa730aea02da2c46db89bafd62d03599-5498962-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=3b93c0ec41c42b2ded52d564864bd81a326ce781-10018920-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=61998ad3ea8abdbae33dd62376ac4bd06d6c92a8-10932914-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=c96d101dbd7151804e5c0c940d57a744ce8f5bd27eb4f7ae-4827877-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=2fdc3076055218e6db4c015cdfb1f35adf9928ca-12150810-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=ad31add62f0ce90b524455af1b48c17971677126-12814900-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=f2d4e79c30aff18fce392e849dcd2049f4492888f4a45a74-9149086-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=da2d38f805240fa22090254a04a6d059-4479838-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=291a523b8513ad7b5cea9f26561ab1d7a0695494-4575600-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=2506dab071d32bd70a1e6cfb1beeec556f538bc1-10766871-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=2a00000179f17cfa8f9ea37942d6d2d5be0f-4236746-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=7e4e9bad7dcc5600e4959223217402213426622a-12385820-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=2ba371388e7b0f0d2611336fbdbb3bd8571d209c-9850413-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=38fa0bf16a05788be46673a046124722f5720b81-9706270-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=6195c7fed493239c9ff473ad5d44f3ba24c15ebbbedadea1-12531500-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=2a66c43ffc6f3b3da319ab88fa00ca9e38e5a065-12475985-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=59889f4a47cbf347e4177d25d4f6b3030b4d6cc8460e4614-11951579-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=2afc161655939150ca26371a1bd747c4545d80b0df160b86-12529743-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=e4b5c33011336d2c594c7113ee150ba7eee17ebea05cc9e8-6220307-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=59c494d4454ba2019a2e6bb76a3c8dcccc6e8db5-9214194-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=14af0b3fae76e7169bcdb8f1252900747a58e485-12661375-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=4653e3e8f35ae8f410abfcf92099cfa2ede55c92-4280979-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=904d5b1998e99e494f4eac99a67d53690d77cd33-9242678-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=f480225bda89a6d97587fb06238093fc44a2c0b0-9671619-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=7f16c67382aa0cc85b568fd0c74bbbad5d3c599a-11374488-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=7f16c67382aa0cc85b568fd0c74bbbad5d3c599a-11374488-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=f88b54f518693447550ddfe37fc7632f5714b0c5-8210081-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=cdc3fb87e2c4f78c6b5c46345e10fd73162ba2a51e020f46-12605172-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=953e85483237088330771c5c681fed4c45ab5346-9821502-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=f0cc34eb9e2f36666a624057b5ed7834fe441a5bd1d1fbe1-10233206-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=146697a615a9968014956fdfe0e445588fc1a44e-8191391-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=e36e9d0eb8df63f103954a46f9804ac2fadb6294-10100414-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=d228eb47a69a203560bcb5bf4cc2e85f2cf590d7-10350562-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=b1653ea8f75907e7af6fa734d014a6e79a59220a-10471440-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=17f3ae5a823d19b860057c178643b47633dcb88e-9228969-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=73fa0baf6b46fee4cf2e989152bc78abb38126b6-8497134-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=3074dd64fb0ff47315da8845dbf6dc6208af9ca9-12569871-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=101918b07633689a3cb471bc797eeab8-5233576-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=1b3b5b6bb76db9a482fb7a7e64741dc1c915676b-4553918-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=1575e25f1d30e510d66bd270006ae5629cfd27d7e7c45a42-12982376-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=0d7b421d514156995639e1de3673200a0d389750-10413045-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=615b8ff3528d76176f64731e3897c8ccc23a9e6c5d3cfce9-11846204-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=90839f576c1efb358e9b9c8c7c4d2811902810d0-5234693-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=5618605e2ccfd778aac9327e9e3be1807360a8102c760c45-13101691-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=ea9bad950caa2a4489f408793f7685467e98c540-5887546-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=4bc93853b1091371fece31357f188e062fbe92541ba14eb4-5084109-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=685181451499b45c97ffb1306710d90d33c6e4c5-10137108-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=0a9556fba493dde4936f3812d94753a4ee47f198-8221537-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=a1b281a652a7da71e84ed70cdb3fae21bc31a7c0-5146892-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=c67c0f6ff6ca3c225cb7b687ced4b07aa9612bae-9234742-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=b74fbb7ee6df251b24014e96f0e91908ba497c1052a30a87-12733951-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=296234565fadd491df035472344e356542961ec4-5544858-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=69e453cf2395775fd0fbb81b0a258c75a35f612e-5869421-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=18f6bedcea70c8adecfe82daaabd66e4f77709ce-5532663-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=f34e9f887156e42a9a99387b723550bb83de763d-5239342-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=c3427cc8090718df3ef3734cb64ad065041c0530-5298475-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=d9148f1f992ce59cfaeb698213fb7448d8780e56-12521952-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=fe93b165ea3e5033a4ed932d1194fef6b734f8f0-9214194-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=5a1ed40d33e51b1af26ef2d4a579d540b67d8ff53a7d0b65-5280263-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=b96512e0df37e17899a9a8dc63554b4b9ddf5b6083748144-3989655-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=4f34684946e6ef8593547317c8e6a4174a6864c4-7757653-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=929e2d342051ef622e0ea4221247fcd2faffc10c-4510207-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=8308a9a1b6a39c18c3e591c683cd065bd4a62b8d-7754520-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=28125daebdbab282f227b448537a6809c1c186aa-9872761-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=156412ebb83cf2016d8220f7ed0206849da884a2-2769791-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=09c9ec3eeab843dd4237bfa11a6a7c6cf169d1b0-10915107-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=15e01eeb5f70827fc2263e93ad259febeb0a763b-10995265-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=7ee5d17fab216f2424ba662150116a54104d6225-9863899-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=92c3de1b360fb2a801f60609c327416ba27d3efe647b61f4-11922792-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=bd678f6364b513823e43056424c320a47dbe178e6f28fd5c-5481592-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=3933def0395c26e0789db48a5d01e288e01e9feb-9842828-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=8324879793bbaac56654e2d1051028dea5c4312a-12639726-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=df44b338134674c952ad26e21293b2bdd1adb885-9198383-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=ef0ae9c4de985518201790fe19501fd91d353f22ecb8fbcd-12473832-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=ec0b88783c04a66f406abce732cc6adf7ca4a490-5331459-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=6ea120aa373bef543b76f338301ebb75-4935694-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=a47aec368926e100295fd77da92670b2e2acebc4-5282589-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=c4d46505c345a0d9be78cd2a2a1b3cc8e4dc1648f9d35e1c-12601053-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=a3187c351e1f2e7d38735cff56a9549cadb470d6-10636835-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=4f22bb8092acdb017e35d2afc137f613481a3b2b7c394197-2920606-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=4e2d1681630e4ea87712be8cb7eb8abf252ad0b1-4502909-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=eb2dcfaa733f9ae8c0b43d91e99f2c997c9103e0-5869856-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=88e495f8c18368c5e413e7ef5add9fdd24c6bc60e0db262e-4080966-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=9ebe184fc42d4b43f678722d72745020f9c5cb4c-4471742-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=35816525d92c07dc54a8ce30341d6b3ae73d4d08-10448622-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=1463328d6e9aa03e5ddcf83e7ac4ecda103c5fe3-3919804-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=852120beed6bc09fff21d6e7cafbfda8f35277dc-9182238-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=dd7896590a7c51cebce7d84b64a9db80978df331-12480075-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=9056b35c80458cb8ba0b4eafbbfaaa5e65068f88-11512273-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=219a8656cd604bf2345b0cad0c4a961244dc7872-9222921-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=e92824e3bfc57968ccad643495a443f87319eac9-9070589-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=993b7316253772bdf324cbe55e1d2b38-4745534-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=25e87179a592c802e9ed245196d6aed3bf54dde6-12463602-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=8b22e26646c221c793d1e24b9285ce38-4544963-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=989af1c974d1eff2d073b59b357f88326475bfca-5230026-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=d005fdead841ec504cdc10804650f09575145025-12475925-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=c5637b91823ea7cc0e0377ba8331fcbaeb00517a-9228595-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=684d5b4e81c9995582ad97f33033f3d0f327bf7e-8497208-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=b99378c55ae68f3867319cd4b48f44fae084f6cc-10876270-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=98bcfb73b07ffb42d86618f4f95f8b93ba9545ea-3560695-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=555ad82e1598ac6f4cb69adf9d88817c-3979292-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=b05a13cf4dbbc3669f055eb1374df7f7d02ff098-11512952-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=3dbbd694f7e77abd5e308e35e94eaf8a25bd17bc-10414372-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=879a21d78ea3a0ff103ae0c80f3c929c22948963-7554427-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=aa2e2e4f046b010e852dd94a40bd01654e1ad6f6-4958261-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=ac26f6f2a04e452cf9441018e725eee32c355302-9181195-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=dbd7369facd0a6cd2ca362771bb79825e481db92-4568513-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=17e34997111a07df8c20ba22dd662780-5481174-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=f6a00b05bccb16de8f34c197a93ee50dc9f05609-10734181-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=eb1fa49372e1c0b5a6b3e73754e511b9791375f6-9625733-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=7aec2e0e1793cbf8c365f8689bb78b8b0b640b3d-10878212-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=b1c00e592ed5db7e98c729c44b10b1a13a603d2a-12728079-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=81b5f0956de6eff973f5cf35a429d12bb7d60d46-3985569-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=1fa3d9e8e90d4e2a04a40bc764372d5fc39eb5b0-9601108-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=16855eee956b4f80616658df403d3588-6906583-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=0ec0166fb1767cc8e119d25ba96d592ea6ac2027-12608381-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=3214e038c5c3e6af625c5e6a4374067e88d4c19f-8177770-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=72e12b180d70bf94ed7763da06b37941d95686c8-12640276-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=fc84479229889bf7ff9459cb6cd296eaa40cacc7-9855166-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=ab03e82e9c507cd00f56a81657affebe2b72f309-4687875-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=9c8e0b274e83ea893f0df61f00d7ec4f18f5a7f838995a7c-12487154-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=78228ba0750da735003aacff3eb99fbf55f5637b-10952956-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=07845578bba724bb9971b39ae1426b49d97df8aaabb8bbae-12503299-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=f372d053210426ba2d41e56c586241bb0f9f3605-10491983-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=0b8b743e9630b7ca6eb69082a8847bce4dfb644c-9137846-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=6c21247715024b09bbee1a31eeb56eb5ace51c53-5233368-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=e6b62674fb06892729f33173ae00e51014c2c0b4-10071204-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=9d757341bd2b5eeda604bf00eef5a78a84e43fd5-10369171-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=35cd3c600f0a249fc4a87b1a47bd22b50cf3563d-7333143-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=864fd11363412bd4262067492a51228176064b60-4815706-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=cfdd2bea14240bed0ee84a4a986e2dca81e64943-9294167-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=9179e06efa8a619220742401af45cffc-5249239-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=647504c56cfd69b1cc6c74acff79b039ad005e616e5ae950-12937496-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=6ef7bf85f7b5f6a5e0810d1bd9590208d3c24705-12569755-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=db383303ebe189390c6b6a6036dcd98f04ea04d6-9236689-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=84df512c0469b35abce3b039baf92f40-5668696-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=59bc98e7b0f508c8a3bd8951345eaccbbf94594e-7551636-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=eb8a5415b224b06f2fca0b25e20b17afcac12d8b-9104009-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=a4bb98a170127adecc67b3fe88fc6a8b27402d2f-9040073-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=5be6f8823aa8409939453ed243f4c0192b796681-10329275-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=91c3f9a4a60669c7852b8d73b7fe892e1fe2ab50a16da12f-12525650-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=27e668e317648ffbbb937fe9cd4732f46c36ceea-4893015-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=6b2ed38e559c82adcd82aabe70b898e15856ab12-8715693-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=992f70f15eb01247b0e3e7e46a33686c08ad9b86-5496593-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=f40f479d38dfd270a03160061585c297c136d3f2-4537101-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=e48c1019024eb4e0372bba01e492e5a549788f3e-8973599-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=9df908e510fab8c304fedcb6e2d0de0ed92836631cf3bdbc-4829890-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=21e0aca74aae306b7730b5c83240cb6cacf8ef2f-8343733-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=0917c2f0a5c1ff6dd4bb250a496a2e06335594a9-11043615-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=ea415858621a96a2c1910f6a7969e31c627035a2-12718991-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=49eb0be71479eb18bab18a49267571ac44b2db1d-4902121-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=ba07e66ad5caf153ccfec61cec81ff1e50f53a6e-5466267-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=3020b810a5e6b1600dc13610e0074218e9e18ad4-5234402-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=c891fe33100924aefd93cb432cd68cbaf45f1530-4034399-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=08924c83c6b8c0903877dc513d442c1bec326284-9429884-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=26af78da8be07ebd3125e8849aa5d00b779b4fb7-8975349-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=5fe14e9113cee854278fb9795fa81d66-5277647-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=fc45389bca871d01b1c39021c757fe36f6e7c62598996fc4-13053828-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=2a0000017a0326abca3a82547e6be4a04064-3643527-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=226dd9da3877af6bdabf0ad0e493c844485cd9e515a0d97d-12143639-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=34565e100fff170f689a4f00cd8c2b8a6b41113c-10595607-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=088ddb13094e72a5f86fdf78f7d813ea909c38c1-3193980-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=2875f816b911fec8980607c9a487cbda53e3ec5f18ff504a-10496841-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=df4add77c37a41ae868f04351e5cebb6-5494799-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=a1bbf035af57c05be586b7257003df17-5147227-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=f31d19d20ad23ca2199d1e9014f835a5-4600463-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=726bd7b71213035350a4bb1ccdf085c4-5896582-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=9ac53552afe91e1be739e585599b9b06046796b26157dfad-12617026-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=800fcd3942b2ed33bc9b46115bf657b26c4c6909-10238674-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=b1c624751fbc49f2bc7b7909b593517f04ab5f45-9215166-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=1afef912206b597f57c0955df65b3985bc4f0d6bb88b8ecc-4328615-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=066d4c05439fe308f9940bd9921a4668763d5871-5368846-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=096264d328c51833aeba35ef04dc94bf0a9e5c19-12421984-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=6ab50d48df4c416db30848bb90c994c52510e10f-10332876-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=e0f3bd8c44841d243bd60f41df877391-4402005-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=fcefd110013eab9ef7a0a2279059b22828161a3e-9156331-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=3b5088a68e97d01b56e92a0dade8f6eb03e4f8aa-3493926-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=2ae0f168a35684dce2804b6fbd4a5c8eaf62405d-5127582-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=793626928a4085ac101b14bba20f4a49cf052e8692df47d0-5875611-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=080954129d2c5b59ec4030639d9509d86841c88c-11497947-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=19412dd38e476e7fe1abcacc55eb1e0d37634109-11490366-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=2a0000017a19bca4ee9b51b7cb7c9a34cbd9-4571855-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=300415edc70cb836b49fa607b8ba38e9e726dd83d1e7a576-5452983-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=cea93c844421a2cd3a885b6315f846d2cd9714e1-12752977-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=56e8b67d09dfe7efec5c4cac781899d78815cffa-3833297-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=6a6970b16764b09c3ad8ecd8c431a43bbee08d9e-8307637-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=968af483ec3e3d512e6054757e835c4e9646f19a-13720467-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=f1c509d0b3c9ea698b68db35e720a210ed96d223-8496968-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=19de3c94672e58a97e73818d882195ae8adf681a-4593205-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=e926b9ea5ccb5fb28cc89460fb1baa343496a56db4f26c0d-12982376-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=04ab50f8a0ef37549633bafecfb82d10b35aefccf561f76c-4219240-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=1a22d2d1fc57b31c81225de3aa23e567c9e99772-10680870-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=8731de49c36f63495fadf770ae9312503fca0280-12371701-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=878e6d414780588c583dc45a569d6a4b0e0e979f-12529777-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=af54d72f12e5a22f3993c8c490c29383-5288018-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=9087f16ddebfe9896622665f2187fdbed99339cc-10266870-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=99928956d1e567e0c81106844d5eb3b1-5282568-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=8f359a1f297db0a237f1ac08036b86f2132446b2-8276455-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=4135c0deca0f09d0126a94d9c37a6bbcef15b3e2-10932673-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=2a6471caac129bdabe9177551124ad88ffecdd63-10555283-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=e895ef4df29f0af97df8e53492730801d8119d10-12548095-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=23a12180ffe369d9ac3595b4dc6721512cd52435-9859478-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=624070eab556db8b3869198e815e2b12e3b3fa04-4705461-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=9056b35c80458cb8ba0b4eafbbfaaa5e65068f88-11512273-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=bba0aa45b39d3fff6ebdd3f1f44b0b3ff0499a2c-10638736-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=2d5b6ef1ac374df48d449d665d103b4bbbe675e1-5338563-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=16e660be2f11974432b1f8e2f21470e80f46f936a7f77b0a-12323132-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=56b7af64bdf0ed6d06cbc9719f21603e58cf2f73-13052262-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=29273070e9e84fcfab63a395138eeff6ce4db34a-10639796-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=1d1f0fc1aa2c80ed9670450b6658478b69a81aad-8373849-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=e1150369a3e3daa47471c6f77aafed05574f5e4a-12413751-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=8a684685d33140eba47c5b12cd333dbdc6a621c4-4230375-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=4ae9859adf2df151d661c97b3e5ff8b7a9a2598a-12508610-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=14e0f90de04c6963a76c0b2b53752b10a293f99f-8331156-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=a7b8b1b58ba9f186595b80bbe945ae8e7ed94504d496c775-11049547-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=e39f9b6fb777945b17fba89a7e907b27-5647550-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=7a97d25d6d75a33306426ecd9e2f8d4e5a9cca2b-4499710-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=874666ad0d963c1ad9ef65b8e8031fc002b21eca-5734463-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=b6e4c50658dca5443bcf5e44b493df87-5869570-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=e0e4868f8ad9e97ce305ab8da78b122d2b4bb9f9-6950445-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=b36d5cfa0cc15f6737a0a7f8721b209fde765825-4232390-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=b1cc892886957b4a39d16fc0b0f70e69ed214945-5858066-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=2a0000017a096cb1acb5f67eeef1b486ed41-4575484-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=bb2591737a3eff51c92bee82c1fe8e50755f169c-12569903-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=fe0810f9ae4c1366956dcfc4c9c09d07ff3f0715-10332876-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=b6943bcb76a1348335d927e3c7e069ddc346cd08-3735052-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=e571584d7b628b9ac7b2bdc990cc9cf27cea5c8a-10996732-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=968591a5748c3d2e0340098fb1926d503e0a91ef-11032733-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=7da4a2ad2c43090bba9c99db499c4145f9ca7a1d5324715e-10235791-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=95de4f037f93c76da78a7b38e1d81646de90225a-5480005-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=3977e615792552f9ba2c678b0112dc2fb7eb9948-10803837-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=47abb8b9335fb5ce99b4ccb70474d87db7470968-9149794-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=0646bf9d67144c82088da94c98162f2f429307e6-4113845-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=9087f16ddebfe9896622665f2187fdbed99339cc-10266870-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=6dcc65e0ada614685f7d0b0188440178eb1e500b-12398098-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=cf55c8db531b08700115b8013d41308c5fa8650b-12384307-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=d67a727954e74b90dbd13bd3262ea1b8c989d480-12365999-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=6d04eeaa242870e1b5719a3e0757bb8c0a1c6aef-10104341-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=028e1d90eeceeda76ca595324c0919b414a1eceecfcc9158-12517331-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=739306b6628ddff249cf19831c897f822ae8bcbb-10143227-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=e585a97613ab76704e1031f512d10a0bd6609f05-5326406-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=1f16248e82fdbbbb2b1c0e88c4cb9d7f8a3f537d-11869273-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=8991d4dc370b5bf3b3914070c589d2bafb4d469e-9888116-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=07364eca82478df412fdef3e0d9a73576404a56f-4782879-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=be7a1403f5261353e8ae71c598e0fd20792034e8-10698057-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=acc674137bba2cc99e854594488e037c64e0b2c7-8497159-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=c59dfb8044c666987beedf0f7dc0f0e3-4326270-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=29f8298c2920475b2d1d7e1d64c6b4ba61b91b11-7777855-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=c2920917da565339c1cfab777bd53ae714dd2a5f-9222271-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=7141db4a41da8a59e4ffe7dadf066b51958cdb50-12831326-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=f906dec3328ec5090e791409fcd23712039e4aa6-9863327-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=8c3f6228655dfbe3fdf947923e034b0f5435599c-5281441-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=41d77987ac8310284d299490866368f5412b6aa4-10869844-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=eed0b7f4ce3217873a287f2129dab46f-2362775-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=50bbd0b3554b5f73a584439003f8d7194c907499-10933751-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=95aff61d80fa40f4976d45330a015fb019eb7508-9813974-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=ab48e078ebf774a17771fb40508e44b1-2463541-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=8472c89284a0e75681d33015d64fea9afb055b68-9624812-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=351bb330390721de8d6cc53340d73699916e7fa5-10877992-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=f46d4391883e34a37301300bbc244b2411298a0d-5236641-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=3cf510c6cec72e44c172d28ce0b1b974efab52ac-11003961-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=4d0357c0078c36585dfa522139a0e277e7f1d273-5489370-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=160ebad34cf08617219a252424280f3c3e628ec9-5233487-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=a682797a95ad1164086885bb9b11168516326076-12714815-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=2a00000179fc23aef3af959a75f7b0687139-4469558-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=78c8714087e3106a8a163871c4f2dc0c2d5c1235-12935885-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=5f08dade2bd15a93b00183643ecfd863763b2354-12480039-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=bfeb20229fd251df9804a321290012c50a3368b8-7012067-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=5798972f098bd3cb45b9b39a1aa7578186ecf4aa-8497455-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=fb827a5a2cccb46fafc7d3083510cc680aea057b-12715024-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=a517426dd3e3f8794b456315100ce2b74bebc3b6-12569755-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=1ccf2c8e80a70603973dbd5cabfd689955b808fe-11499518-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=be3e1b97ab83aa7dcc98b2c48bddb4970fd09ea8-10465776-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=3d4a995c9d55303bed27affc9240f91a92264522-12149948-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=6756453f756f0a299ef570daa3867139daa1a35a-7188894-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=28332f173c2c4b66643700b6458310d8b468c70d205091b4-4809878-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=577a219e92e26a0e5db6e8e4fc269a30993a22e82065b9e6-4889316-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=5d0704a1963f8adfb8947cc7c46e727f-4836671-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=1e79ed8b10d644a33bf59a04abc384923f56f774-12371092-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=568373f64b1a92c6005786279cea7991-5679824-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=dd25eefdcd3b6880e29a12ce1da774d5aaf52c75-5542956-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=1c36e6744285c61613185cff02628d824e5932b1-8356639-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=e42f0a39c5f013a9c0e0272838993d1ce35ce483-7012254-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=3d0f707a518be70e75b17d598e8005ac111f7da3-4709556-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=540c856a7413bf6fcf8c0cbf4b5aa4d3a4254163-11042380-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=5f0f33e081e2c434fbbd87dfe747e74c8e016c45-12399224-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=20ddad4d73f7f60ccc6c05fca69cd6d347ab0e9c-7946262-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=ae63ae43f33995d6fb7b944ab0567059df587cb9-9148232-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=946eddaa7246f3e7357de4c7c532995cfd4ad984-9882341-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=4652499d2e0a891b5b0a16b76fd1bbe81d11498a-9844612-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=aa5037f48c1dddd8c5bfd5abcfe179617af4a6b9-8240946-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=c00bd1dfa0971fe6e2e47a6c7d3c03c352fde39f-9198382-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=264a61ed7fcf1b5ebc6956eedee367755e52dd93-8497448-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=8d40dcd806656b7dbc706727b97b7b67e77c201a-3614495-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=19a9d205017dbb8c9bdd156ed2f127f585d526b4-10197150-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=7c64a165b50d19d4650697ef07af95a263d21715-12474042-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=bfb12a65ffe29a5cee61fe049344335b237daf60db9e4c8d-12445046-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=8c0b4d33066e4626f87ed308bf4e9fe11fe04380-12714516-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=f374141fd71bb743a43012376424d8a1356ad6d6-13009973-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=fa3830f51e988e269bbcc86c20e5b29bf17b6c2a-5384017-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=36fc6aa986bd8035b68da28ff8a02c06d728bd41-5880151-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=1a6f8be059bf097e2206b4c99476a96161c2702b15ec969a-5232029-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=315bfc0b2b041df7242055e376525831bb739494-12423479-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=093109a1025512aa7b2c36d20351df7cbde9aa6e-10122654-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=ddaae2048af43cd52d6b1fbe4cdeeefdd01e4e4d-12612889-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=54d080864bf795cbb5cfc34647bfd654021c7390-9849756-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=b0c080ef17749955bc8d467f9270121269f3c550-9044992-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=54ca2ae97c8f91f3836ffe5c8b9a9aaddde5e2da-9044040-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=41173601c8b92053dd9fb90e14ee619dec4334d5ac676a64-4507747-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=0d3aba78849686370df063570460fb3dbd602855-10932914-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=386520eb4f416f10292f20f4fc7a0084da6eda34-7754910-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=cb3d70d2f54dd12fbe63237f403a6dcf7966f075-8350343-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=7b64089561e5b07cf41edc364f11e0f80951aa00a976bbdf-11370034-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=20054127a526b77d9383f184211f49442f3059d9-4969143-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=1cf8495954ca89b3adc723cb7536e298a07b5fcf-4079652-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=2e6e42c16f5fb486a7bb6d2ee8b2f75671c3216841d37045-12527828-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=88fc2584cf94d45e2d58fde48a1aa0c38245f53a-7998976-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=b2ba3e813c6ad94968a62ee42e2ec6b6ae1e057f-4390197-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=3519e54ceb049084195b3cb836a6769dbc6da5b9-4809558-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=b648fac1cf492e2d41f83b6bf7f8fe931553789b-10744014-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=ed8fffe64b71340f9bb976f5105dffbbff090655-5452446-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=af50f0e6339de9c722b66d791961e707ba74dcb7-4987702-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=4014493654dd9d9281c208345743d1e503e82ed8-8497038-images-thumbs&n=13",
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
        "product_image": "https://avatars.mds.yandex.net/i?id=70800a57d0b7df4c158a355101257bfcef3b6574-5666463-images-thumbs&n=13",
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










