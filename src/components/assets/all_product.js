import veg1 from './veg1.png'
import veg2 from './veg2.webp'
import veg3 from './veg3.png'
import veg4 from './veg4.webp'
import veg5 from './veg5.png'
import veg6 from './veg6.png'
import veg7 from './veg7.webp'
import veg8 from './veg8.webp'
import veg9 from './veg9.webp'
import veg10 from './veg10.webp'
import veg11 from './veg11.webp'
import veg12 from './veg12.webp'
import veg13 from './veg13.webp'
import veg14 from './veg14.webp'
import veg15 from './veg15.webp'
import veg16 from './veg16.webp'
import fruit1 from './fruit1.png'
import fruit2 from './fruit2.png'
import fruit3 from './fruit3.png'
import fruit4 from './fruit4.png'
import fruit5 from './fruit5.webp'
import fruit6 from './fruit6.webp'
import fruit7 from './fruit7.webp'
import fruit8 from './fruit8.webp'
import fruit9 from './fruit9.webp'
import fruit10 from './fruit10.webp'
import fruit11 from './fruit11.webp'
import fruit12 from './fruit12.webp'
import nonVeg1 from './nonVeg1.webp'
import nonVeg2 from './nonVeg2.webp'
import nonVeg3 from './nonVeg3.webp'
import nonVeg4 from './nonVeg4.webp'
import nonVeg5 from './nonVeg5.webp'
import nonVeg6 from './nonVeg6.webp'
import nonVeg7 from './nonVeg7.webp'
import nonVeg8 from './nonVeg8.webp'
import nonVeg9 from './nonVeg9.webp'
import nonVeg10 from './nonVeg10.webp'
import nonVeg11 from './nonVeg11.webp'
import nonVeg12 from './nonVeg12.webp'


let all_product = [
    {
        id: 1,
        image: veg1,
        name: 'Gourd (Parwal)',
        mass: '1kg',
        newPrice: '30',
        oldPrice: '40',
        detail: 'Gourd vegetables, such as bitter melon, bottle gourd, and zucchini, offer a plethora of health benefits due to their rich nutrient profile. They are low in calories and high in dietary fiber, which aids in digestion and helps maintain a healthy weight. Their high water content keeps you hydrated and supports overall metabolic function. Gourds are also packed with essential vitamins and minerals, including vitamins A, C, and several B vitamins, as well as potassium, magnesium, and iron. These nutrients contribute to improved immune function, better skin health, and enhanced energy levels. Moreover, the antioxidants found in gourd vegetables help combat oxidative stress and inflammation, potentially lowering the risk of chronic diseases such as heart disease and diabetes. Their natural compounds can also support healthy blood sugar levels and improve gastrointestinal health. Incorporating gourd vegetables into your diet can therefore offer comprehensive support for overall wellness.',
    },
    {
        id: 2,
        image: veg2,
        name: 'Brinjal (Baigan)',
        mass: '1kg',
        newPrice: '40',
        oldPrice: '50',
        detail: 'Brinjal, or eggplant, is a highly nutritious vegetable that provides numerous health benefits. It is rich in dietary fiber, which promotes healthy digestion and can aid in weight management by helping you feel full longer. Brinjal is also packed with essential vitamins and minerals, including vitamins B1, B6, and K, as well as potassium, manganese, and folate. Its high antioxidant content, particularly from compounds like nasunin and chlorogenic acid, helps protect cells from damage, reducing oxidative stress and inflammation. This can support heart health by improving cholesterol levels and blood pressure. Additionally, brinjal natural compounds have been shown to support brain health, enhance cognitive function, and may even have anti-cancer properties. The low-calorie, nutrient-dense profile of brinjal makes it a valuable addition to a balanced diet for overall health and well-being.',
    },
    {
        id: 3,
        image: veg3,
        name: 'Spinach (Palak)',
        mass: '1kg',
        newPrice: '20',
        oldPrice: '30',
        detail: 'Spinach is a powerhouse of nutrition, offering a wide array of health benefits. Rich in vitamins A, C, and K, as well as folate and iron, spinach supports immune function, promotes healthy skin, and aids in blood clotting. Its high content of antioxidants, such as lutein and zeaxanthin, helps protect eye health by reducing the risk of age-related macular degeneration. The vegetable is also a great source of dietary fiber, which supports digestive health and can aid in weight management by keeping you full longer. Spinach high levels of nitrates may help improve cardiovascular health by promoting better blood flow and reducing blood pressure. Additionally, its anti-inflammatory properties contribute to overall well-being and may help reduce the risk of chronic diseases. Incorporating spinach into your diet can thus enhance overall health and vitality.',
    },
    {
        id: 4,
        image: veg4,
        name: 'Ladyfinger',
        mass: '1kg',
        newPrice: '30',
        oldPrice: '40',
        detail: 'Ladyfinger, also known as okra, is a highly nutritious vegetable with numerous health benefits. It is rich in dietary fiber, which supports digestive health by promoting regular bowel movements and preventing constipation. The vegetable is packed with essential vitamins such as vitamins A, C, and K, which contribute to immune function, skin health, and bone strength. Ladyfinger also provides significant amounts of folate, which is crucial for cell function and tissue growth. Its antioxidants, including flavonoids and polyphenols, help combat oxidative stress and inflammation, potentially reducing the risk of chronic diseases like heart disease and diabetes. Additionally, ladyfinger contains mucilage, a gel-like substance that may aid in blood sugar regulation by slowing the absorption of sugar in the intestines. The vegetable low calorie and high nutrient density make it an excellent choice for supporting overall health and well-being.',
    },
    {
        id: 5,
        image: veg5,
        name: 'Beans',
        mass: '1kg',
        newPrice: '40',
        oldPrice: '50',
        detail: 'Beans and vegetables offer a wealth of benefits, making them essential components of a healthy diet. Beans are rich in protein, fiber, vitamins, and minerals, including iron and potassium, which support muscle growth, digestion, and cardiovascular health. They also have a low glycemic index, making them excellent for blood sugar regulation. Vegetables, on the other hand, provide a broad spectrum of vitamins, such as A, C, and K, as well as antioxidants and phytochemicals that help combat oxidative stress and inflammation. Together, beans and vegetables contribute to improved digestion, reduced risk of chronic diseases like heart disease and cancer, better weight management, and overall enhanced well-being. Incorporating a variety of these foods into your diet can help ensure you are getting a diverse range of nutrients and health benefits.',
    },
    {
        id: 6,
        image: veg6,
        name: 'Tomato',
        mass: '1kg',
        newPrice: '30',
        oldPrice: '40',
        detail: 'Tomatoes offer a wide range of health benefits, making them a nutritious addition to any diet. Rich in vitamins C and K, as well as potassium and folate, tomatoes support immune function, bone health, and overall vitality. Their high antioxidant content, particularly lycopene, has been linked to reduced risks of chronic diseases, including heart disease and certain cancers. Tomatoes also contain dietary fiber, which aids in digestion and helps maintain healthy cholesterol levels. Additionally, they have anti-inflammatory properties that can contribute to reduced inflammation in the body. Incorporating tomatoes into your meals can enhance not only flavor but also well-being.',
    },
    {
        id: 7,
        image: veg7,
        name: 'Potato',
        mass: '1kg',
        newPrice: '40',
        oldPrice: '50',
        detail: 'Potatoes are a highly versatile and nutritious vegetable, offering a range of health benefits. Rich in essential nutrients such as vitamin C, potassium, and vitamin B6, they contribute to a healthy immune system, support heart health, and promote proper nerve function. Their high fiber content, especially when consumed with the skin, aids digestion and helps regulate blood sugar levels. Potatoes also contain antioxidants, which can help combat oxidative stress and reduce inflammation. Additionally, their natural starches provide a steady source of energy, making them a valuable component of a balanced diet. Their versatility in cooking allows for a wide variety of healthy preparations, further enhancing their role in a nutritious diet.',
    },
    {
        id: 8,
        image: veg8,
        name: 'Onion',
        mass: '1kg',
        newPrice: '40',
        oldPrice: '50',
        detail: 'Onions are a versatile vegetable packed with numerous health benefits. Rich in antioxidants, particularly quercetin and sulfur compounds, onions help combat oxidative stress and inflammation, potentially reducing the risk of chronic diseases like heart disease and cancer. Their high fiber content supports digestive health by promoting regular bowel movements and feeding beneficial gut bacteria. Onions also possess antimicrobial properties, which can aid in boosting the immune system and fighting off infections. Additionally, the vitamins and minerals found in onions, such as vitamin C, vitamin B6, and manganese, contribute to overall wellness, including improved skin health, better cognitive function, and enhanced bone health. Regular consumption of onions can also support cardiovascular health by helping to lower blood pressure and cholesterol levels.',
    },
    {
        id: 9,
        image: veg9,
        name: 'Broccoli',
        mass: '1kg',
        newPrice: '50',
        oldPrice: '60',
        detail: 'Broccoli is a nutritional powerhouse with a multitude of health benefits. It is exceptionally rich in vitamins C and K, folate, and a variety of essential minerals like potassium and calcium, which support immune function, bone health, and overall bodily functions. Packed with fiber, broccoli aids digestion and helps maintain healthy cholesterol levels. Its high antioxidant content, including sulforaphane and other phytochemicals, provides potent anti-inflammatory and cancer-fighting properties. Broccoli also supports detoxification processes and helps regulate blood sugar levels, making it an excellent choice for maintaining overall health and preventing chronic diseases. Including broccoli in your diet can contribute significantly to improved wellness and longevity.',
    },
    {
        id: 10,
        image: veg10,
        name: 'Cauliflower',
        mass: '1kg',
        newPrice: '30',
        oldPrice: '40',
        detail: 'Cauliflower is a highly nutritious vegetable that offers a multitude of health benefits. It is packed with vitamins C and K, which support immune function and bone health, respectively. Additionally, its rich fiber content promotes digestive health by aiding in regular bowel movements and supporting a healthy gut microbiome. Cauliflower is also a great source of antioxidants, including sulforaphane, which has been linked to reduced inflammation and potential cancer-fighting properties. Low in calories and carbohydrates, it serves as a great option for weight management and can be used as a healthy substitute for higher-calorie foods like grains and potatoes. Its versatility in cooking allows it to be enjoyed in a variety of dishes, from rice alternatives to creamy soups, making it a valuable addition to any diet.',
    },
    {
        id: 11,
        image: veg11,
        name: 'Bell Pepper',
        mass: '1kg',
        newPrice: '40',
        oldPrice: '45',
        detail: 'Bell peppers are a nutritious powerhouse packed with a range of health benefits. They are rich in essential vitamins and minerals, particularly vitamin C, which supports a robust immune system and aids in skin health by promoting collagen production. Bell peppers also contain a variety of antioxidants, such as vitamin A and beta-carotene, which help protect cells from oxidative damage and support eye health. Additionally, their high fiber content aids in digestion and can help regulate blood sugar levels, contributing to overall metabolic health. With their low calorie and fat content, bell peppers are an excellent choice for weight management, and their vibrant colors indicate the presence of beneficial phytonutrients that may reduce inflammation and support cardiovascular health. Incorporating bell peppers into your diet can therefore enhance overall wellness and support a balanced, healthy lifestyle.',
    },
    {
        id: 12,
        image: veg12,
        name: 'Chilli',
        mass: '1kg',
        newPrice: '30',
        oldPrice: '35',
        detail: 'Chili vegetables offer a range of health benefits due to their rich nutrient profile and active compounds. They are packed with vitamins A, C, and E, which support immune function, skin health, and overall vitality. The capsaicin found in chili peppers has been linked to metabolism boosts, helping to burn calories and aid weight management. Additionally, capsaicin has anti-inflammatory properties, which can help reduce pain and improve circulation. Chili vegetables are also high in antioxidants, which combat oxidative stress and may lower the risk of chronic diseases. Their high fiber content supports digestive health by promoting regular bowel movements and a healthy gut microbiome. Moreover, the spicy kick can enhance flavor without the need for excessive salt or unhealthy fats, making them a flavorful and health-conscious addition to any diet.',
    },
    {
        id: 13,
        image: veg13,
        name: 'Cabbage',
        mass: '1kg',
        newPrice: '25',
        oldPrice: '30',
        detail: 'Cabbage is a highly nutritious vegetable that offers numerous health benefits. Rich in vitamins C and K, it supports immune function and bone health while acting as a powerful antioxidant to combat oxidative stress. Its high fiber content aids in digestion and promotes gut health by supporting beneficial bacteria. Cabbage also contains compounds like sulforaphane and indole-3-carbinol, which have been linked to reduced cancer risk by enhancing detoxification and preventing inflammation. Additionally, its low calorie and high water content make it a great choice for weight management. Whether raw, cooked, or fermented as sauerkraut, cabbage provides a versatile, health-promoting addition to any diet.',
    },
    {
        id: 14,
        image: veg14,
        name: 'Bottle Gourd',
        mass: '1kg',
        newPrice: '30',
        oldPrice: '35',
        detail: 'Bottle gourd, also known as lauki or opo squash, is a highly nutritious vegetable with numerous health benefits. It is exceptionally low in calories and fat, making it an ideal choice for weight management and promoting a healthy metabolism. Rich in water content, bottle gourd helps in maintaining hydration and supports healthy kidney function by aiding in the elimination of toxins. Its high fiber content contributes to digestive health, preventing constipation and promoting regular bowel movements. Bottle gourd also provides essential vitamins and minerals, including vitamin C, vitamin B complex, and calcium, which are vital for overall well-being, including immune support, energy production, and bone health. Additionally, its natural diuretic properties can help manage blood pressure and reduce fluid retention. Incorporating bottle gourd into your diet can thus enhance hydration, digestive health, and overall nutritional balance.',
    },
    {
        id: 15,
        image: veg15,
        name: 'Beetroot',
        mass: '1kg',
        newPrice: '25',
        oldPrice: '30',
        detail: 'Beetroot vegetables offer a wealth of health benefits, primarily due to their impressive nutritional content. Rich in essential vitamins like B folate, vitamin C, and minerals such as potassium and manganese, beetroots support cardiovascular health by helping to regulate blood pressure and improve blood flow. Their high nitrate content is known to enhance exercise performance and stamina by improving oxygen delivery to muscles. Additionally, beetroots are packed with antioxidants like betalains, which have anti-inflammatory and detoxifying properties that aid in reducing oxidative stress and promoting liver health. The fiber in beetroots contributes to digestive health by supporting regular bowel movements and fostering a healthy gut microbiome. With their low calorie and high nutrient density, beetroots are an excellent choice for a balanced diet, contributing to overall well-being and vitality.',
    },
    {
        id: 16,
        image: veg16,
        name: 'Carrot',
        mass: '1kg',
        newPrice: '30',
        oldPrice: '35',
        detail: 'Carrots are a nutrient-dense vegetable offering a range of health benefits. They are exceptionally high in beta-carotene, which the body converts into vitamin A, essential for maintaining healthy vision, skin, and immune function. Rich in antioxidants like lutein and zeaxanthin, carrots help protect cells from damage and support eye health. Their fiber content aids in digestive health by promoting regular bowel movements and maintaining gut health. Carrots also provide vitamins C and K, which contribute to immune support and bone health, respectively. Additionally, their natural sweetness makes them a satisfying, low-calorie snack that can support weight management while providing sustained energy.',
    },
    {
        id: 17,
        image: fruit1,
        name: 'Mango',
        mass: '1kg',
        newPrice: '65',
        oldPrice: '70',
        detail: 'Mangoes are a nutritional powerhouse, offering a wide range of health benefits. Rich in vitamins A and C, they support healthy vision, boost the immune system, and promote radiant skin. Their high fiber content aids digestion and helps regulate blood sugar levels, making them a good choice for managing diabetes. Mangoes are also packed with antioxidants, including beta-carotene and polyphenols, which help combat oxidative stress and reduce inflammation. Additionally, they provide essential minerals like potassium and magnesium, which are crucial for heart health and muscle function. With their sweet flavor and versatile use in both sweet and savory dishes, mangoes not only enhance your diet but also contribute to overall well-being.',
    },
    {
        id: 18,
        image: fruit2,
        name: 'Black Plum',
        mass: '1kg',
        newPrice: '50',
        oldPrice: '60',
        detail: 'Black plum fruit, known as "Jamun" in some regions, offers a wealth of health benefits due to its rich nutritional profile. Packed with antioxidants like anthocyanins and vitamin C, it helps combat oxidative stress and strengthen the immune system. Its high fiber content supports digestive health and can aid in weight management by promoting satiety. The fruit is also known for its potential to help regulate blood sugar levels, making it beneficial for individuals with diabetes. Additionally, black plum is anti-inflammatory properties can contribute to joint and cardiovascular health. With its low calorie and high nutrient density, black plum is an excellent choice for enhancing overall wellness and supporting a healthy diet.',
    },
    {
        id: 19,
        image: fruit3,
        name: 'Litchi',
        mass: '1kg',
        newPrice: '75',
        oldPrice: '80',
        detail: 'Litchi fruits offer a range of health benefits thanks to their rich nutritional profile. They are an excellent source of vitamin C, which boosts the immune system, promotes skin health, and aids in collagen production. Litchis are also packed with antioxidants, such as flavonoids and polyphenols, which help protect cells from oxidative damage and reduce inflammation. The fruit contains essential minerals like potassium, which supports heart health and helps regulate blood pressure, and copper, important for energy production and red blood cell formation. Additionally, litchis are high in dietary fiber, which aids digestion, promotes a healthy gut, and helps maintain stable blood sugar levels. Their low calorie content makes them a great choice for those managing their weight while still seeking a delicious and nutritious fruit option.',
    },
    {
        id: 20,
        image: fruit4,
        name: 'Guava',
        mass: '1kg',
        newPrice: '40',
        oldPrice: '50',
        detail: 'Guava fruits offer a wealth of health benefits, making them a superb addition to any diet. Rich in dietary fiber, guavas promote healthy digestion and can help prevent constipation. They are also packed with vitamin C, which supports immune function, skin health, and aids in the absorption of iron. The fruit contains antioxidants like lycopene and quercetin, which may reduce inflammation and protect against chronic diseases. Additionally, guavas have a low glycemic index, making them a good choice for blood sugar management. Their high content of vitamins A and E contributes to better vision and skin health, while the minerals in guavas, such as potassium and magnesium, support heart health and muscle function. Overall, guavas are a nutrient-dense fruit that can contribute to overall well-being and disease prevention.',
    },
    {
        id: 21,
        image: fruit5,
        name: 'Banana',
        mass: '1kg',
        newPrice: '60',
        oldPrice: '70',
        detail: 'Bananas are a powerhouse of nutrition and offer numerous health benefits. Rich in potassium, they help maintain healthy blood pressure and support heart health. They also provide a good source of dietary fiber, which aids in digestion and helps prevent constipation. Bananas contain essential vitamins such as vitamin C and vitamin B6, which bolster the immune system and aid in brain function. The natural sugars in bananas, including fructose, glucose, and sucrose, provide a quick energy boost, making them an excellent choice for athletes and active individuals. Additionally, bananas have antioxidant properties and compounds that can help improve mood and reduce stress. Their versatility makes them easy to incorporate into a variety of diets, promoting overall well-being.',
    },
    {
        id: 22,
        image: fruit6,
        name: 'Grapes',
        mass: '1kg',
        newPrice: '75',
        oldPrice: '90',
        detail: 'Grapes are a nutritional powerhouse, offering a range of health benefits. Rich in antioxidants like resveratrol, they help combat oxidative stress and inflammation, which can reduce the risk of chronic diseases such as heart disease and cancer. Their high vitamin C content supports the immune system and promotes healthy skin, while the natural sugars and fiber provide a quick energy boost and aid in digestion. Grapes also contain potassium, which helps regulate blood pressure and supports heart health. Additionally, their hydrating properties contribute to overall well-being. Consuming grapes regularly can enhance cardiovascular health, improve cognitive function, and promote overall vitality.',
    },
    {
        id: 23,
        image: fruit7,
        name: 'Watermelon',
        mass: '1kg',
        newPrice: '20',
        oldPrice: '25',
        detail: 'Watermelon is not only a delicious and refreshing fruit but also packed with numerous health benefits. Rich in vitamins A and C, it boosts the immune system, supports skin health, and promotes good vision. Its high water content, about 92%, keeps the body hydrated and aids in maintaining optimal fluid balance. Additionally, watermelon contains antioxidants like lycopene and citrulline, which have been linked to reduced inflammation, improved heart health, and enhanced exercise performance. The fruit’s natural sugars provide a quick energy boost, while its fiber content supports digestive health. Overall, incorporating watermelon into your diet can contribute to overall wellness and vitality.',
    },
    {
        id: 24,
        image: fruit8,
        name: 'Papaya',
        mass: '1kg',
        newPrice: '50',
        oldPrice: '60',
        detail: 'Papaya is a nutrient-rich fruit that offers a wide range of health benefits. It is an excellent source of vitamin C, which boosts the immune system and promotes healthy skin by fighting free radicals. The fruit contains papain, an enzyme that aids in digestion by breaking down proteins, and has anti-inflammatory properties that can help reduce inflammation and promote overall digestive health. Papaya is also rich in antioxidants like beta-carotene, which supports eye health and may reduce the risk of chronic diseases. Additionally, its high fiber content contributes to digestive regularity and helps maintain a healthy weight. The fruit’s abundance of vitamins A, E, and K, along with folate and potassium, further supports cardiovascular health, bone health, and overall well-being.',
    },
    {
        id: 25,
        image: fruit9,
        name: 'Orange',
        mass: '1kg',
        newPrice: '80',
        oldPrice: '100',
        detail: 'Oranges are a powerhouse of nutritional benefits, offering a rich source of vitamin C, which is essential for boosting the immune system and promoting skin health. They are also packed with antioxidants, including flavonoids and carotenoids, which help combat oxidative stress and inflammation in the body. Oranges provide dietary fiber, aiding in digestion and promoting a healthy gut, while their potassium content supports heart health by helping to regulate blood pressure. Additionally, the natural sugars in oranges provide a quick energy boost, making them a great snack. Their high water content helps with hydration, and the presence of various phytonutrients contributes to overall wellness. Consuming oranges regularly can enhance overall health and well-being, making them a delicious and nutritious choice.',
    },
    {
        id: 26,
        image: fruit10,
        name: 'Kiwi',
        mass: '1kg',
        newPrice: '120',
        oldPrice: '140',
        detail: 'Kiwi fruits are a nutritional powerhouse packed with a variety of health benefits. They are rich in vitamins C and K, which bolster the immune system, promote healthy skin, and support bone health. The high fiber content aids in digestion and helps maintain a healthy gut, while the antioxidants, including vitamin E and polyphenols, combat oxidative stress and inflammation. Kiwi also contains significant amounts of potassium, which is crucial for maintaining cardiovascular health and regulating blood pressure. Additionally, its natural enzymes, like actinidin, can help with protein digestion, making it a great addition to meals. Overall, incorporating kiwi into your diet can contribute to overall well-being and support multiple aspects of health.',
    },
    {
        id: 27,
        image: fruit11,
        name: 'Cucumber',
        mass: '1kg',
        newPrice: '30',
        oldPrice: '40',
        detail: 'Cucumber fruits are not only refreshing but also offer a myriad of health benefits. Rich in water content, they provide excellent hydration while being low in calories, making them a great choice for weight management. Their high antioxidant content, including vitamins C and K, helps combat oxidative stress and supports skin health by promoting collagen production. Additionally, cucumbers are a good source of fiber and silica, which aid in digestion and strengthen connective tissues. They also have anti-inflammatory properties and can help reduce bloating and maintain healthy blood pressure levels. Overall, incorporating cucumbers into your diet can support overall wellness and contribute to a balanced, nutritious lifestyle.',
    },
    {
        id: 28,
        image: fruit12,
        name: 'Apple',
        mass: '1kg',
        newPrice: '100',
        oldPrice: '120',
        detail: 'Apples offer a multitude of health benefits that make them a fantastic addition to a balanced diet. Rich in dietary fiber, particularly pectin, they support digestive health by promoting regular bowel movements and improving gut flora. Apples are also a great source of vitamin C, which boosts the immune system and helps maintain healthy skin and tissues. Their antioxidant properties, largely attributed to flavonoids and polyphenols, combat oxidative stress and may reduce the risk of chronic diseases such as heart disease and certain cancers. Additionally, the natural sugars in apples provide a steady energy release without causing spikes in blood glucose levels, making them a heart-healthy snack option. With their low calorie content and high water percentage, apples can also aid in weight management and hydration.',
    },
    {
        id: 29,
        image: nonVeg1,
        name: 'Chicken',
        mass: '1kg',
        newPrice: '240',
        oldPrice: '260',
        detail: 'Chicken offers numerous health benefits, making it a versatile and valuable addition to any diet. It is a lean source of high-quality protein, essential for muscle growth, repair, and overall body function. Chicken is also rich in important vitamins and minerals, such as B vitamins (especially niacin and B6), which support energy metabolism and brain function, and minerals like phosphorus and selenium that are crucial for bone health and immune system support. Additionally, its lower fat content, particularly when opting for skinless cuts, makes it a heart-healthy choice compared to red meats. The versatility of chicken means it can be incorporated into a wide variety of dishes, promoting balanced nutrition and making it easy to maintain a diverse diet.',
    },
    {
        id: 30,
        image: nonVeg2,
        name: 'Chicken Breast Boneless',
        mass: '1kg',
        newPrice: '400',
        oldPrice: '450',
        detail: 'Chicken breast boneless offers a multitude of benefits, making it a popular choice for health-conscious individuals. It’s a lean source of protein, essential for muscle repair and growth, without the higher fat content found in other cuts of meat. This makes it ideal for those looking to maintain or build muscle while managing calorie intake. Chicken breast is also rich in important vitamins and minerals, including B vitamins (such as niacin and B6), which support energy metabolism and overall well-being. Its versatility in cooking allows for a wide range of healthy meal options, from grilling and baking to sautéing and slow-cooking. Additionally, chicken breast is relatively easy to prepare and quick to cook, fitting well into busy lifestyles. With its mild flavor and adaptability, it can be incorporated into various cuisines and dishes, making it a staple in balanced, nutritious diets.',
    },
    {
        id: 31,
        image: nonVeg3,
        name: 'Chicken Wings',
        mass: '1kg',
        newPrice: '350',
        oldPrice: '380',
        detail: 'Chicken wings offer a delightful mix of flavor and nutrition, making them a popular choice for many. They are a good source of high-quality protein, essential for muscle growth and repair, and they also provide important vitamins and minerals such as B vitamins, which support energy metabolism, and zinc, which is crucial for immune function. Additionally, chicken wings contain collagen, which can support joint health and skin elasticity. When prepared with healthy cooking methods, such as baking or grilling, they can be a relatively low-calorie, nutrient-dense snack or meal. However, it is important to be mindful of the preparation and sauces, as deep-frying and high-calorie sauces can add excessive fats and sugars.',
    },
    {
        id: 32,
        image: nonVeg4,
        name: 'Chicken Legs',
        mass: '1kg',
        newPrice: '550',
        oldPrice: '600',
        detail: 'Chicken legs offer numerous benefits that make them a popular choice in many diets. Rich in high-quality protein, they support muscle growth and repair, making them an excellent option for those looking to build or maintain muscle mass. Chicken legs are also a good source of essential nutrients, including B vitamins like niacin and riboflavin, which play key roles in energy metabolism and overall health. The presence of minerals such as iron and zinc further contributes to optimal immune function and red blood cell production. Additionally, chicken legs provide a decent amount of healthy fats, which are important for brain function and hormone production. Versatile and relatively affordable, they can be cooked in various ways to suit different culinary preferences, making them both a nutritious and convenient food choice.',
    },
    {
        id: 33,
        image: nonVeg5,
        name: 'Mutton - Curry Cut',
        mass: '1kg',
        newPrice: '800',
        oldPrice: '850',
        detail: 'Mutton curry cut offers a range of benefits that contribute to a balanced and nutritious diet. Rich in high-quality protein, it supports muscle growth and repair while also providing essential amino acids necessary for various bodily functions. This cut of meat is an excellent source of important nutrients like iron, which aids in oxygen transport and prevents anemia, and zinc, which is crucial for immune function and cellular repair. Mutton is also a good source of B vitamins, particularly B12, which supports nerve function and the formation of red blood cells. Additionally, mutton contains healthy fats that are important for brain health and energy. When prepared as a curry, the meat is often cooked with a variety of spices that not only enhance flavor but also provide additional health benefits, such as anti-inflammatory and antioxidant properties. Overall, mutton curry cut offers both nutritional value and culinary versatility, making it a beneficial choice for those seeking a hearty and wholesome meal.',
    },
    {
        id: 34,
        image: nonVeg6,
        name: 'Mutton - Liver',
        mass: '1kg',
        newPrice: '600',
        oldPrice: '650',
        detail: 'Mutton liver offers a range of impressive health benefits due to its rich nutritional profile. It is an excellent source of high-quality protein, essential for muscle growth and repair, and provides vital vitamins and minerals. Particularly high in vitamin A, it supports vision, immune function, and skin health. The liver is also packed with B vitamins, including B12, which is crucial for red blood cell formation and neurological function. Additionally, it contains iron, which helps combat anemia and supports energy levels, and zinc, which plays a role in immune function and wound healing. Its high content of essential fatty acids contributes to heart health and cognitive function. However, because mutton liver is also high in cholesterol and purines, it should be consumed in moderation to balance its benefits with potential health concerns.',
    },
    {
        id: 35,
        image: nonVeg7,
        name: 'Mutton Lamb Shanks',
        mass: '1kg',
        newPrice: '850',
        oldPrice: '900',
        detail: 'Mutton lamb shanks offer a range of nutritional and culinary benefits that make them a valuable addition to a diet. Rich in high-quality protein, they support muscle growth and repair while providing essential vitamins and minerals such as iron, zinc, and B vitamins, which are crucial for energy production and overall health. The slow-cooking process, often used for lamb shanks, breaks down connective tissues and collagen, resulting in tender, flavorful meat that is easier to digest. This method also enhances the development of rich, savory flavors and can make for a comforting, satisfying meal. Additionally, lamb shanks are versatile, adapting well to various cuisines and cooking styles, from hearty stews to flavorful braises, making them a favorite in diverse culinary traditions.',
    },
    {
        id: 36,
        image: nonVeg8,
        name: 'Mutton - Boneless',
        mass: '1kg',
        newPrice: '1000',
        oldPrice: '1050',
        detail: 'Boneless mutton offers a range of nutritional and culinary benefits, making it a versatile and healthful choice for many dishes. High in protein, it supports muscle growth and repair while providing essential amino acids. It is also a rich source of important vitamins and minerals, including vitamin B12, iron, and zinc, which are crucial for energy production, red blood cell formation, and immune function. The absence of bones in boneless mutton simplifies preparation and cooking, allowing for quicker meal assembly and easier portion control. Additionally, its tender texture enhances the overall dining experience, making it suitable for a variety of recipes from stews and curries to kebabs and stir-fries. Overall, boneless mutton combines nutritional value with convenience and culinary flexibility.',
    },
    {
        id: 37,
        image: nonVeg9,
        name: 'Roopchand Fish',
        mass: '1kg',
        newPrice: '400',
        oldPrice: '450',
        detail: 'Roopchand fish, known for its delicate flavor and high nutritional value, offers a range of health benefits. It is an excellent source of lean protein, which supports muscle growth and repair, while its omega-3 fatty acids contribute to heart health by reducing inflammation and lowering cholesterol levels. Additionally, Roopchand fish is rich in essential vitamins and minerals, such as vitamin D and calcium, which promote bone health and enhance immune function. Its low mercury content makes it a safer choice compared to other fish species, and its easy digestibility makes it suitable for people with sensitive digestive systems. Including Roopchand fish in your diet can contribute to overall well-being, making it a valuable addition to a balanced nutrition plan.',
    },
    {
        id: 38,
        image: nonVeg10,
        name: 'Rohu Fish Curry',
        mass: '1kg',
        newPrice: '300',
        oldPrice: '350',
        detail: 'Rohu Fish Curry offers a variety of benefits that make it a nutritious and flavorful addition to any diet. This dish features Rohu, a freshwater fish rich in high-quality proteins, which are essential for muscle growth and repair. The fish also provides an abundance of omega-3 fatty acids, known for their heart-healthy benefits, including lowering cholesterol and reducing inflammation. Additionally, Rohu is a good source of essential vitamins and minerals such as vitamin D, B12, and selenium, which support overall health, boost immunity, and promote healthy skin and bones. The curry itself often includes spices like turmeric, ginger, and garlic, which have anti-inflammatory and antioxidant properties, enhancing the dish is health benefits. Overall, Rohu Fish Curry not only delivers a delightful taste but also supports a balanced, nutritious diet.',
    },
    {
        id: 39,
        image: nonVeg11,
        name: 'Catla Fish Curry',
        mass: '1kg',
        newPrice: '550',
        oldPrice: '600',
        detail: 'Catla fish curry offers a range of benefits that make it both a nutritious and flavorful choice. Rich in high-quality protein, Catla fish supports muscle growth and repair while being relatively low in fat compared to other animal proteins. It is an excellent source of essential omega-3 fatty acids, which promote heart health, reduce inflammation, and support brain function. Additionally, Catla fish is packed with important vitamins and minerals such as vitamin D, vitamin B12, selenium, and iodine, all of which contribute to overall well-being. When prepared in curry form, the dish also incorporates a variety of spices and herbs, which have their own health benefits, including improved digestion, antioxidant properties, and enhanced flavor without excess calories or unhealthy fats. This combination of nutritional advantages and taste makes Catla fish curry a wholesome and satisfying meal option.',
    },
    {
        id: 40,
        image: nonVeg12,
        name: 'Sardine Fish',
        mass: '1kg',
        newPrice: '650',
        oldPrice: '700',
        detail: 'Sardine fish offer a wealth of health benefits due to their rich nutrient profile. They are an excellent source of high-quality protein, essential for muscle growth and repair, and are packed with omega-3 fatty acids, which support heart health by reducing inflammation and lowering cholesterol levels. Sardines are also loaded with vitamins such as B12, crucial for brain health and red blood cell formation, and vitamin D, which supports bone health and immune function. Additionally, they provide a substantial amount of calcium, especially beneficial for bone strength, and are low in mercury compared to larger fish, making them a safer choice for regular consumption. Their combination of nutrients can contribute to improved cognitive function, enhanced energy levels, and a reduced risk of chronic diseases.',
    },
];

export default all_product;