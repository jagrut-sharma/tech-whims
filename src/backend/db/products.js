// import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: "9eb0c25b-447c-4723-9ce4-639527debb68",
    name: "Mi Book 15",
    price: 31990,
    originalPrice: 51999,
    image:
      "https://res.cloudinary.com/dtbd1y4en/image/upload/v1683908106/redmi-book-15_ksizgp.jpg",
    company: "redmi",
    description:
      "For this model, screen size is 39.62 cm and hard disk size is 256 GB. CPU Model\tCore is i3. RAM Memory Installed Size is 8 GB. Operating System is Windows 10 Home. Special Feature includes Anti Glare Screen, Light Weight, Thin. Graphics Card is Integrated",
    category: "Laptop",
    isShippingAvailable: true,
    inStock: true,
    reviewCount: 418,
    stars: 3.7,
  },
  {
    _id: "eb7db2dd-231a-47f5-b803-4415c2150efa",
    name: "Mi Notebook Pro",
    price: 54499,
    originalPrice: 74999,
    image:
      "https://res.cloudinary.com/dtbd1y4en/image/upload/v1683908295/mi-notebook-pro_hi4vih.jpg",
    company: "redmi",
    description:
      "For this model, screen size is 14 Inches and hard disk size is 512 GB. CPU Model Core is i5. RAM Memory Installed Size is 16 GB. Operating System is Windows 11. Special Feature includes Fingerprint Reader, Backlit Keyboard. Graphics Card is Integrated",
    category: "Laptop",
    isShippingAvailable: false,
    inStock: true,
    reviewCount: 1805,
    stars: 4.3,
  },

  {
    _id: "331cac1a-a7e9-45e3-aae7-c52f15a39083",
    name: "Apple Macbook Air 2020",
    price: 82900,
    originalPrice: 99900,
    image:
      "https://res.cloudinary.com/dtbd1y4en/image/upload/v1683910169/apple-air-2020_kacdj5.jpg",
    company: "apple",
    description:
      "For this model, screen size is 13 inches and hard disk size is 256 GB. CPU Model\tCore is Core M Family. RAM Memory Installed Size is 8 GB. Operating System is MacOS 10.14 Mojave. Special Feature is Backlit Keyboard. Graphics Card is Integrated",
    category: "Laptop",
    isShippingAvailable: true,
    inStock: true,
    reviewCount: 456,
    stars: 4.6,
  },
  {
    _id: "d1aacf3f-ff94-486a-8c9b-08071723e334",
    name: "Apple Macbook Air 2022",
    price: 106999,
    originalPrice: 119999,
    image:
      "https://res.cloudinary.com/dtbd1y4en/image/upload/v1683910465/apple-air-2022_ijki4z.jpg",
    company: "apple",
    description:
      "For this model, screen size is 13.6 inches and hard disk size is 256 GB. RAM Memory Installed Size is 8 GB. Operating System is MacOS. Special Feature is Portable, Backlit Keyboard, Thin. Graphics Card is Integrated.",
    category: "Laptop",
    isShippingAvailable: false,
    inStock: true,
    reviewCount: 7890,
    stars: 3.3,
  },
  {
    _id: "2f5ab856-4564-4c64-990a-2051b3a7e7bd",
    name: "Apple Macbook Air 2023",
    price: 110899,
    originalPrice: 120999,
    featured: true,
    image:
      "https://res.cloudinary.com/dtbd1y4en/image/upload/v1683910482/apple-air-2023_b59fdw.jpg",
    company: "apple",
    description:
      "For this model, screen size is 14 inches and hard disk size is 1000 GB. CPU Model\tCore is Core M Family. RAM Memory Installed Size is 16 GB. Operating System is MacOS. Special Feature is Backlit Keyboard. Graphics Card is Integrated",
    category: "Laptop",
    isShippingAvailable: true,
    inStock: true,
    reviewCount: 31110,
    stars: 4.5,
  },
  {
    _id: "9478cf2f-df32-4729-87c9-d6ac60b1bfe3",
    name: "Dell Vostro",
    price: 42990,
    originalPrice: 61817,
    image:
      "https://res.cloudinary.com/dtbd1y4en/image/upload/v1683911615/dell-vostro_svph09.jpg",
    company: "dell",
    description:
      "For this model, screen size is 14 inches and hard disk size is 512 GB. CPU Model\tCore is Core i3 Family. RAM Memory Installed Size is 8 GB. Operating System is Windows 11 Home. Graphics Card is Integrated",
    category: "Laptop",
    isShippingAvailable: true,
    inStock: true,
    reviewCount: 46,
    stars: 1.2,
  },
  {
    _id: "f9ec2e21-dab4-4702-b95d-bb8b0b2f9ece",
    name: "Dell Inspiron",
    price: 58990,
    originalPrice: 80472,
    image:
      "https://res.cloudinary.com/dtbd1y4en/image/upload/v1683911875/dell-inspiron_jgtkxt.jpg",
    company: "dell",
    description:
      "For this model, screen size is 15.6 inches and hard disk size is 1 TB. CPU Model\tCore is Core i5. RAM Memory Installed Size is 8 GB. Operating System is Windows 11 Home. Graphics Card is Integrated",
    category: "Laptop",
    isShippingAvailable: false,
    inStock: false,
    reviewCount: 400,
    stars: 4.7,
  },
  {
    _id: "6e4d7266-94f8-4bdd-a833-3cf983ed26c9",
    name: "Dell Latitude",
    price: 33990,
    originalPrice: 48444,
    image:
      "https://res.cloudinary.com/dtbd1y4en/image/upload/v1683911975/dell-latitude_kn6awk.jpg",
    company: "dell",
    description:
      "For this model, screen size is 14 inches. CPU Model Core is Core i3 Family. RAM Memory Installed Size is 8 GB. Operating System is Windows 11 Home. Graphics Card is Integrated",
    category: "Laptop",
    isShippingAvailable: true,
    inStock: true,
    reviewCount: 46,
    stars: 1.2,
  },
  {
    _id: "e93efef1-cfc0-4dd9-8aca-6dbb346f79a3",
    name: "VivoBook 16X",
    price: 54333,
    originalPrice: 74990,
    image:
      "https://res.cloudinary.com/dtbd1y4en/image/upload/v1683964247/vivoBook-16X_zuibqo.jpg",
    company: "vivo",
    description:
      "For this model, screen size is 40.64 cm and hard disk size is 512 GB. CPU Model Core is Ryzen 5. RAM Memory Installed Size is 16 GB. Operating System is Windows 11 Home. Special Feature includes FingerPrint, Backlit Keyboard, With Alexa voice-recognition support, FHD+ (1920 x 1200, WUXGA) 16:10 aspect ratio, Anti Glare Coating. Graphics Card is Integrated",
    category: "Laptop",
    isShippingAvailable: true,
    inStock: true,
    reviewCount: 31,
    stars: 1.9,
  },
  {
    _id: "bbe28b81-346f-41ce-9418-a8cd01158004",
    name: "VivoBook Ultra k14",
    price: 40990,
    originalPrice: 58990,
    image:
      "https://res.cloudinary.com/dtbd1y4en/image/upload/v1683964247/vivo-ultra-k14_mcxwct.jpg",
    company: "vivo",
    description:
      "For this model, screen size is 35.56 cm and hard disk size is 512 GB. CPU Model Core is i3. RAM Memory Installed Size is 8 GB. Operating System is Windows 11 Home. Special Feature includes Fingerprint Reader, Lightweight, Anti Glare Coating. Graphics Card is Integrated",
    category: "Laptop",
    isShippingAvailable: false,
    inStock: true,
    reviewCount: 48,
    stars: 2.2,
  },
  {
    _id: "2dd98eec-d329-4cbe-bef7-0f5e40719634",
    name: "VivoBook 14",
    price: 69990,
    originalPrice: 85990,
    image:
      "https://res.cloudinary.com/dtbd1y4en/image/upload/v1683964247/vivoBook-14_cssao3.jpg",
    company: "vivo",
    description:
      "For this model, screen size is 35.56 cm and hard disk size is 512 GB. CPU Model Core is Core i5. RAM Memory Installed Size is 16 GB. Operating System is Windows 11 Home. Special Feature includes Backlit Keyboard, Fingerprint Reader, Light Weight. Graphics Card is Integrated",
    category: "Laptop",
    isShippingAvailable: true,
    inStock: true,
    reviewCount: 12,
    stars: 4.3,
  },
  {
    _id: "44640b73-2096-4a52-b7c7-e9af614fbc81",
    name: "VivoBook 15",
    price: 42990,
    originalPrice: 60990,
    image:
      "https://res.cloudinary.com/dtbd1y4en/image/upload/v1683964247/vivoBook-15_anrbws.jpg",
    company: "vivo",
    description:
      "For this model, screen size is 39.62 cm and hard disk size is 512 GB. CPU Model Core is Core i3. RAM Memory Installed Size is 8 GB. Operating System is Windows 11 Home. Special Feature includes 60Hz Refresh Rate, FingerPrint, FHD (1920 x 1080), Chiclet Keyboard. Graphics Card is Integrated",
    category: "Laptop",
    isShippingAvailable: false,
    inStock: true,
    reviewCount: 35,
    stars: 3.4,
  },
  // -----------------Television--------------------
  {
    _id: "618811f6-3670-45ce-add5-83cc9e616c37",
    name: "Mi 5A",
    price: 13499,
    originalPrice: 24999,
    image:
      "https://res.cloudinary.com/dtbd1y4en/image/upload/v1683908781/mi-5a_spazxt.jpg",
    company: "redmi",
    description:
      "For this model, screen size is 32 Inches. Product Dimensions\tis (19D x 71.5W x 47H) cm. Operating System is Windows 11. Mounting Hardware includes\t1 LED TV, 2 Table Stand Base, 1 User Manual, 1 Remote Control, 4 screws, 2 x AAA Batteries. Resolution is 720p with the refresh rate is 60Hz.",
    category: "Television",
    isShippingAvailable: true,
    inStock: true,
    reviewCount: 35573,
    stars: 4.2,
  },
  {
    _id: "75a9fabb-2f56-4e29-9f56-63e936e99f39",
    name: "Mi horizon",
    price: 21399,
    originalPrice: 29999,
    image:
      "https://res.cloudinary.com/dtbd1y4en/image/upload/v1683909215/mi-horizon_n4anpx.jpg",
    company: "redmi",
    description:
      "For this model, screen size is 40 Inches. Product Dimensions\tis (8.7D x 89.2W x 55.9H) cm. Operating System is Windows 11. Mounting Hardware includes\t1 LED TV, 2 Table Stand Base, 1 User Manual, 1 Remote Control, 4 screws. Resolution is 1080p with the refresh rate is 60Hz.",
    category: "Television",
    isShippingAvailable: false,
    inStock: true,
    reviewCount: 35573,
    stars: 4.1,
  },
  {
    _id: "f4e17d8b-cd91-4170-94ed-116eaeb920b5",
    name: "Apple Pro-Display XDR",
    price: 59899,
    originalPrice: 89999,
    image:
      "https://res.cloudinary.com/dtbd1y4en/image/upload/v1683910548/apple-pro-display-xdr_gvs2i9.jpg",
    company: "apple",
    description:
      "For this model, screen size is 32 Inches. Extreme Dynamic Range (XDR)",
    category: "Television",
    isShippingAvailable: false,
    inStock: false,
    reviewCount: 9,
    stars: 2.6,
  },
  {
    _id: "2541aff9-1d23-4bad-977c-fb3c6e3b3ccc",
    name: "Oneplus 50Y1S Pro",
    price: 32999,
    originalPrice: 45999,
    image:
      "https://res.cloudinary.com/dtbd1y4en/image/upload/v1683912824/oneplus-50Y1S-pro_s495sd.jpg",
    company: "oneplus",
    description:
      "For this model, screen size is 50 Inches. Product Dimensions\tis (24.6D x 110W x 70.2H) cm. Operating System is Android 10. Mounting Hardware includes 1 LED TV, 2 Table Stand Base, 1 User Manual, 1 Remote Control,1 AV IN Adapter, 1AC Cord, 2 AAA Battery. Resolution is 4K with the refresh rate is 60Hz.",
    category: "Television",
    isShippingAvailable: true,
    inStock: true,
    reviewCount: 9339,
    stars: 4.2,
  },
  {
    _id: "d46f42ef-46d5-43ca-a574-cfe6ff5b10c6",
    name: "Oneplus 40Y1S",
    price: 21999,
    originalPrice: 29999,
    image:
      "https://res.cloudinary.com/dtbd1y4en/image/upload/v1683908781/mi-5a_spazxt.jpg",
    company: "oneplus",
    description:
      "For this model, screen size is 40 Inches. Product Dimensions\tis (0.09D x 8.92W x 0.51H) m. Operating System is Android TV 11. Mounting Hardware includes\t1 LED TV, 2 Table Stand Base, 1 Wall Mount, 1 User Manual, 1 Remote Control,1 AV IN Adapter. Resolution is 1080p with the refresh rate is 60Hz.",
    category: "Television",
    isShippingAvailable: false,
    inStock: true,
    reviewCount: 150,
    stars: 3.8,
  },
  {
    _id: "05eaffca-2141-4f15-bc1c-0d02b4933cf9",
    name: "Oneplus 55U1S",
    price: 42999,
    originalPrice: 59999,
    image:
      "https://res.cloudinary.com/dtbd1y4en/image/upload/v1683918874/oneplus-55U1S_pl3nko.jpg",
    company: "oneplus",
    description:
      "For this model, screen size is 55 Inches. Product Dimensions\tis (19D x 76.7W x 122.7H) cm. Operating System is Android TV. Mounting Hardware includes\t1 TV unit, 1 Remot, 1 AC Power Cord, 1AV In Adaptor, 1 Set Stand, 1 Wall Mount, 1 User manual. Resolution is 4K with the refresh rate is 60Hz.",
    category: "Television",
    isShippingAvailable: true,
    inStock: true,
    reviewCount: 501,
    stars: 3.5,
  },
  {
    _id: "609ac069-74b6-4c2f-ac4e-35d95b11eb58",
    name: "Oneplus 55Q1IN-1",
    price: 49990,
    originalPrice: 69900,
    image:
      "https://res.cloudinary.com/dtbd1y4en/image/upload/v1683919255/oneplus-55Q1IN-1_di10wk.jpg",
    company: "oneplus",
    description:
      "For this model, screen size is 55 Inches. Product Dimensions\tis (5.1D x 122.4W x 70.6H) cm. Operating System is Android TV. Mounting Hardware includes\t1 QLED TV, 1 Wall-mounting Bracket, 1 User Manual, 1 Warranty Card, 1 Remote Control,1 AV IN Adaptor, 1AC Cord, 1 USB Type-C cable. Resolution is 4K with the refresh rate is 480 SMR.",
    category: "Television",
    isShippingAvailable: false,
    inStock: true,
    reviewCount: 11023,
    stars: 4.1,
  },
  // -------------------- Smartphones -------------------
  {
    _id: "dd46bd36-53cf-47ba-8890-2e7cf48efe0d",
    name: "Mi 12 Pro",
    price: 44999,
    originalPrice: 79999,
    image:
      "https://res.cloudinary.com/dtbd1y4en/image/upload/v1683909725/mi-12-pro_mlm5mt.jpg",
    company: "redmi",
    description:
      "For this model, screen size is 6.73 inches and RAM Memory is 8 GB. Operating System is Android 12. Special Feature includes 10bit 2K+ Curved AMOLED Display, 50+50+50MP Flagship Cameras (OIS). This is a 5G device.",
    category: "Smartphone",
    isShippingAvailable: true,
    inStock: true,
    reviewCount: 3294,
    stars: 4,
  },
  {
    _id: "546c8b3d-a1a8-48d2-b7d6-a9e4323c600d",
    name: "Mi Go",
    price: 5399,
    originalPrice: 6499,
    image:
      "https://res.cloudinary.com/dtbd1y4en/image/upload/v1683909795/mi-go-phone_obpz7q.jpg",
    company: "redmi",
    description:
      "For this model, screen size is 5 inches and RAM Memory is 1 GB. Operating System is Android 7.1. This is a 4G device",
    category: "Smartphone",
    isShippingAvailable: false,
    inStock: true,
    reviewCount: 70,
    stars: 2.9,
  },
  {
    _id: "4dcf80d0-6826-44ed-8d79-3c6f1bb8be41",
    name: "Mi 10 Prime",
    price: 14999,
    originalPrice: 16999,
    image:
      "https://res.cloudinary.com/dtbd1y4en/image/upload/v1683909893/mi-10-prime_sspsnb.jpg",
    company: "redmi",
    description:
      "For this model, screen size is 6.5 inches and RAM Memory is 6 GB. Cellular technology is LTE.",
    category: "Smartphone",
    isShippingAvailable: true,
    inStock: true,
    reviewCount: 607,
    stars: 4.9,
  },
  {
    _id: "b73d9050-682e-4fad-bcef-fa81dfb2c278",
    name: "Mi Note 12",
    price: 17999,
    originalPrice: 19999,
    image:
      "https://res.cloudinary.com/dtbd1y4en/image/upload/v1683910028/mi-note-12_w0gqbt.jpg",
    company: "redmi",
    description:
      "For this model, screen size is 6.67 inches and RAM Memory is 128 GB. Operating Sysytem is MIUI 13. Cellular technology is 5G.",
    category: "Smartphone",
    isShippingAvailable: false,
    inStock: true,
    reviewCount: 3851,
    stars: 2.9,
  },
  {
    _id: "855a692a-2a6e-4de6-ad03-6370ee8922f1",
    name: "Mi 9 Activ",
    price: 9499,
    originalPrice: 10999,
    image:
      "https://res.cloudinary.com/dtbd1y4en/image/upload/v1683910103/mi-9-activ_kklapc.jpg",
    company: "redmi",
    description:
      "For this model, screen size is 6.53 inches and RAM Memory is 4 GB. Operating System is MIUI 20. Cellular technology is LTE.",
    category: "Smartphone",
    isShippingAvailable: true,
    inStock: true,
    reviewCount: 70,
    stars: 1.3,
  },

  {
    _id: "39a94157-c9e8-42a0-9f1a-f4a325e11165",
    name: "iPhone 12",
    price: 69000,
    originalPrice: 74000,
    image:
      "https://res.cloudinary.com/dtbd1y4en/image/upload/v1683911348/iPhone-12_agdvwp.jpg",
    company: "apple",
    description:
      "For this model, screen size is 6.1 inches and RAM Memory is 64 GB. Operating System is IOS 14. This is a 5G device",
    category: "Smartphone",
    isShippingAvailable: true,
    inStock: true,
    reviewCount: 5002,
    stars: 3.2,
  },
  {
    _id: "ed28b36a-ad0b-43f8-8667-5e5d6c4204ea",
    name: "iPhone 14 plus",
    price: 57999,
    originalPrice: 58999,
    image:
      "https://res.cloudinary.com/dtbd1y4en/image/upload/v1683911421/iPhone-14-plus_d4nmst.jpg",
    company: "apple",
    description:
      "For this model, screen size is 16.95cm and RAM Memory is 128 GB. Operating System is IOS. Special Feature is Cinematic mode in 4K Dolby Vision up to 30 fps. This is a 5G device",
    category: "Smartphone",
    isShippingAvailable: false,
    inStock: true,
    reviewCount: 22031,
    stars: 4.7,
  },

  {
    _id: "d56db3c1-e1c7-4826-a90c-f013ac2ed1ca",
    name: "Oneplus Nord CE 3 lite",
    price: 21999,
    originalPrice: 21999,
    image:
      "https://res.cloudinary.com/dtbd1y4en/image/upload/v1683957585/oneplus-nord-CE-3-lite_weksou.jpg",
    company: "oneplus",
    description:
      "For this model, screen size is 6.72 inches and RAM Memory is 8 GB. Operating System is OxygenOS. Special Feature is Cinematic mode in 4K Dolby Vision up to 30 fps. This is a 5G device",
    category: "Smartphone",
    isShippingAvailable: true,
    inStock: true,
    reviewCount: 794,
    stars: 3.2,
  },
  {
    _id: "6e702ea2-79ad-41ec-831c-788ce929d797",
    name: "Oneplus 11R",
    price: 44999,
    originalPrice: 44999,
    image:
      "https://res.cloudinary.com/dtbd1y4en/image/upload/v1683957584/oneplus-11R_ojekns.jpg",
    company: "oneplus",
    description:
      "For this model, screen size is 6.7 inches and RAM Memory is 16 GB. Operating System is OxygenOS. This is a 5G device",
    category: "Smartphone",
    isShippingAvailable: false,
    inStock: true,
    reviewCount: 3031,
    stars: 2.7,
  },
  {
    _id: "4192693d-93df-4d20-8c48-73a305031b63",
    name: "Oneplus Nord 2T",
    price: 28999,
    originalPrice: 28999,
    image:
      "https://res.cloudinary.com/dtbd1y4en/image/upload/v1683957584/oneplus-nord-2T_vrpgbq.jpg",
    company: "oneplus",
    description:
      "For this model, screen size is 6.43 inches and RAM Memory is 8 GB. Operating System is OxygenOS. This is a 5G device",
    category: "Smartphone",
    isShippingAvailable: true,
    inStock: true,
    reviewCount: 4039,
    stars: 1.7,
  },
  {
    _id: "698d2495-4698-4f44-bd42-223dc77d5362",
    name: "Oneplus 10R",
    price: 34999,
    originalPrice: 38999,
    image:
      "https://res.cloudinary.com/dtbd1y4en/image/upload/v1683957584/oneplus-10R_kcpvcm.jpg",
    company: "oneplus",
    description:
      "For this model, screen size is 6.7 Inches and RAM Memory is 8 GB. Operating System is OxygenOS. This is a 5G device",
    category: "Smartphone",
    isShippingAvailable: false,
    inStock: true,
    reviewCount: 9999,
    stars: 0.7,
  },
  {
    _id: "9f9dccab-add1-4ba5-8c5f-730631b512b5",
    name: "Oneplus 11",
    price: 61999,
    originalPrice: 61999,
    featured: true,
    image:
      "https://res.cloudinary.com/dtbd1y4en/image/upload/v1683957584/oneplus-11_jzzby3.jpg",
    company: "oneplus",
    description:
      "For this model, screen size is 6.7 inches and RAM Memory is 16 GB. Operating System is OxygenOS. This is a 5G device.",
    category: "Smartphone",
    isShippingAvailable: true,
    inStock: true,
    reviewCount: 22031,
    stars: 5,
  },

  {
    _id: "ddcf39b0-a875-46db-bd54-4f7847003939",
    name: "Vivo V23",
    price: 27524,
    originalPrice: 37990,
    image:
      "https://res.cloudinary.com/dtbd1y4en/image/upload/v1683966913/vivo-v23_lio4dm.jpg",
    company: "vivo",
    description:
      "For this model, screen size is 6.44 inches and RAM Memory is 12 GB. Operating System is Android 12.0. Cellular technology is 5G.",
    category: "Smartphone",
    isShippingAvailable: true,
    inStock: true,
    reviewCount: 551,
    stars: 4.3,
  },
  {
    _id: "6959bbfe-ecd4-4dfe-8e1a-948cf0fc86e3",
    name: "Vivo Y15C",
    price: 9499,
    originalPrice: 14590,
    image:
      "https://res.cloudinary.com/dtbd1y4en/image/upload/v1683966913/vivo-y15c_f9p4s7.jpg",
    company: "vivo",
    description:
      "For this model, screen size is 6.51 inches and RAM Memory is 3 GB. Operating System is Android 12. Cellular technology is 4G.",
    category: "Smartphone",
    isShippingAvailable: false,
    inStock: true,
    reviewCount: 420,
    stars: 3.6,
  },
  {
    _id: "de301eae-99c7-4325-ad2e-78ae3e938c76",
    name: "Vivo t1x",
    price: 11999,
    originalPrice: 16990,
    image:
      "https://res.cloudinary.com/dtbd1y4en/image/upload/v1683966913/vivo-t1x_xiwl5f.jpg",
    company: "vivo",
    description:
      "For this model, screen size is 6.53 inches and RAM Memory is 4 GB. Operating System is Android 12.0. Special features includes Front Camera, Camera. Cellular technology is 4G.",
    category: "Smartphone",
    isShippingAvailable: true,
    inStock: true,
    reviewCount: 70,
    stars: 2.9,
  },
  {
    _id: "529c74cb-b045-4fc4-b1cb-25102683a130",
    name: "Vivo Y22",
    price: 16499,
    originalPrice: 19990,
    image:
      "https://res.cloudinary.com/dtbd1y4en/image/upload/v1683966913/vivo-y22_z188nd.jpg",
    company: "vivo",
    description:
      "For this model, screen size is 6.55 inches and RAM Memory is 6 GB. Operating System is FunTouch OS 12. Cellular technology is 4G.",
    category: "Smartphone",
    isShippingAvailable: false,
    inStock: true,
    reviewCount: 411,
    stars: 4.1,
  },
  {
    _id: "e7398eb2-4f87-4e5e-b949-83eb97960985",
    name: "Vivo Y16",
    price: 10499,
    originalPrice: 14999,
    image:
      "https://res.cloudinary.com/dtbd1y4en/image/upload/v1683966913/vivo-y16_rej6lc.jpg",
    company: "vivo",
    description:
      "For this model, screen size is 6.51 inches and RAM Memory is 3 GB. Operating System is FunTouch OS 12. Cellular technology is LTE.",
    category: "Smartphone",
    isShippingAvailable: true,
    inStock: true,
    reviewCount: 196,
    stars: 2.8,
  },
];
