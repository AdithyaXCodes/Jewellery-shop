const products = [
  
    {
      id: 1,
      name: "Elegant Blue Earring",
      price: "₹8,500",
      category: "earring",
      image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5619500_png/millenia-drop-earrings--octagon-cut--blue--rhodium-plated-swarovski-5619500.png",
      image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5619500_ms1/millenia-drop-earrings--octagon-cut--blue--rhodium-plated-swarovski-5619500.jpg"
    },
    {
      id: 2,
      name: "Crystal Garden Earring",
      price: "₹14,200",
      category: "earring",
      image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5731148_png/millenia-drop-earrings--square-cut--caramel--gold-tone-plated-swarovski-5731148.png",
      image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5731148_ms1/millenia-drop-earrings--square-cut--caramel--gold-tone-plated-swarovski-5731148.jpg"
    },
    {
      id: 3,
      name: "Modern Mini Hoops",
      price: "₹9,000",
      category: "earring",
      image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5725757_png/millenia-hoop-earrings--mixed-cuts--multicolored--gold-tone-plated-swarovski-5725757.png",
      image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5725757_ms1/millenia-hoop-earrings--mixed-cuts--multicolored--gold-tone-plated-swarovski-5725757.jpg"
    },
  {
    id: 4,
    name: "Matrix Hoop Earrings - Green",
    price: "₹8,500",
    category: "earring",
    image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5732264_png/matrix-hoop-earrings--mixed-cuts--green--rhodium-plated-swarovski-5732264.png",
    image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5732264_ms1/matrix-hoop-earrings--mixed-cuts--green--rhodium-plated-swarovski-5732264.jpg"
  },
  {
    id: 5,
    name: "Gema Drop Earrings - Multicolored",
    price: "₹14,200",
    category: "earring",
    image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5656417_png/gema-drop-earrings--asymmetrical-design--mixed-cuts--long--multicolored--rhodium-plated-swarovski-5656417.png",
    image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5656417_ms1/gema-drop-earrings--asymmetrical-design--mixed-cuts--long--multicolored--rhodium-plated-swarovski-5656417.jpg"
  },
  {
    id: 6,
    name: "Hyperbola Hoop Earrings - White",
    price: "₹9,000",
    category: "earring",
    image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5689718_png/hyperbola-hoop-earrings--mixed-cuts--mini--white--mixed-metal-finish-swarovski-5689718.png",
    image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5689718_ms1/hyperbola-hoop-earrings--mixed-cuts--mini--white--mixed-metal-finish-swarovski-5689718.jpg"
  },
  {
    id: 7,
    name: "Idyllia Clip Earrings - Shell Blue",
    price: "₹8,600",
    category: "earring",
    image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5683033_png/idyllia-clip-earrings--shell--blue--mixed-metal-finish-swarovski-5683033.png",
    image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5683033_ms1/idyllia-clip-earrings--shell--blue--mixed-metal-finish-swarovski-5683033.jpg"
  },
  {
    id: 8,
    name: "Idyllia Stud Earrings - Clover Green",
    price: "₹6,800",
    category: "earring",
    image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5666236_png/idyllia-stud-earrings--clover--green--gold-tone-plated-swarovski-5666236.png",
    image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5666236_ms1/idyllia-stud-earrings--clover--green--gold-tone-plated-swarovski-5666236.jpg"
  },
  {
    id: 9,
    name: "Millenia Drop Earrings - Octagon White",
    price: "₹11,200",
    category: "earring",
    image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5636569_png/millenia-drop-earrings--octagon-cut--white--rhodium-plated-swarovski-5636569.png",
    image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5636569_ms1/millenia-drop-earrings--octagon-cut--white--rhodium-plated-swarovski-5636569.jpg"
  },
  {
    id: 10,
    name: "Gema Drop Earrings - Pink Flower",
    price: "₹9,800",
    category: "earring",
    image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5688486_png/gema-drop-earrings--mixed-cuts--crystal-pearls--flower--pink--gold-tone-plated-swarovski-5688486.png",
    image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5688486_ms1/gema-drop-earrings--mixed-cuts--crystal-pearls--flower--pink--gold-tone-plated-swarovski-5688486.jpg"
  },
  {
    id: 11,
    name: "Ariana Grande Hoop Earrings",
    price: "₹10,499",
    category: "earring",
    image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5720868_png/ariana-grande-x-swarovski-hoop-earrings--crystal-pearl--baguette-cut--white--rhodium-plated-swarovski-5720868.png",
    image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5720868_ms1/ariana-grande-x-swarovski-hoop-earrings--crystal-pearl--baguette-cut--white--rhodium-plated-swarovski-5720868.jpg"
  },
  {
    id: 12,
    name: "Millenia Drop Earrings - Blue Gradient",
    price: "₹12,000",
    category: "earring",
    image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5696516_png/millenia-drop-earrings--octagon-cut--color-gradient--blue--rhodium-plated-swarovski-5696516.png",
    image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5696516_ms1/millenia-drop-earrings--octagon-cut--color-gradient--blue--rhodium-plated-swarovski-5696516.jpg"
  },
  {
    id: 13,
    name: "Matrix Hoop Earrings - Green Octagon",
    price: "₹8,750",
    category: "earring",
    image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5705787_png/matrix-hoop-earrings--baguette-cut--octagon-shape--color-gradient--green--rhodium-plated-swarovski-5705787.png",
    image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5705787_ms1/matrix-hoop-earrings--baguette-cut--octagon-shape--color-gradient--green--rhodium-plated-swarovski-5705787.jpg"
  },
  {
    id: 14,
    name: "Ariana Grande Drop Earrings",
    price: "₹10,799",
    category: "earring",
    image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5720869_png/ariana-grande-x-swarovski-drop-earrings--crystal-pearl--mixed-cuts--white--rhodium-plated-swarovski-5720869.png",
    image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5720869_ms1/ariana-grande-x-swarovski-drop-earrings--crystal-pearl--mixed-cuts--white--rhodium-plated-swarovski-5720869.jpg"
  },
  {
    id: 15,
    name: "Lucent Hoop Earrings - Green",
    price: "₹9,200",
    category: "earring",
    image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5680786_png/lucent-hoop-earrings--octagon-shape--small--green-swarovski-5680786.png",
    image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5680786_ms1/lucent-hoop-earrings--octagon-shape--small--green-swarovski-5680786.jpg"
  },
  {
    id: 16,
    name: "Matrix Clip Earrings - White",
    price: "₹7,800",
    category: "earring",
    image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5692523_png/matrix-clip-earrings--mixed-cuts--white--rhodium-plated-swarovski-5692523.png",
    image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5692523_ms1/matrix-clip-earrings--mixed-cuts--white--rhodium-plated-swarovski-5692523.jpg"
  },
  {
    id: 17,
    name: "Gema Clip Earrings - Chandelier",
    price: "₹15,499",
    category: "earring",
    image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5601887_png/gema-clip-earrings--mixed-cuts--chandelier--extra-long--multicolored--rhodium-plated-swarovski-5601887.png",
    image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5601887_ms1/gema-clip-earrings--mixed-cuts--chandelier--extra-long--multicolored--rhodium-plated-swarovski-5601887.jpg"
  },
  {
    id: 18,
    name: "Florere Stud Earrings - Pink Flower",
    price: "₹7,500",
    category: "earring",
    image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5656635_png/florere-stud-earrings--flower--pink--gold-tone-plated-swarovski-5656635.png",
    image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5656635_ms1/florere-stud-earrings--flower--pink--gold-tone-plated-swarovski-5656635.jpg"
  
    },
  {
    id: 19,
    name: "Millenia Hoop Earrings - Pear Cut",
    price: "₹11,700",
    category: "earring",
    image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5601509_png/millenia-hoop-earrings--pear-cut--white--rhodium-plated-swarovski-5601509.png",
    image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5601509_ms1/millenia-hoop-earrings--pear-cut--white--rhodium-plated-swarovski-5601509.jpg"
  },
  {
    id: 20,
    name: "Idyllia Drop Earrings - Butterfly",
    price: "₹13,200",
    category: "earring",
    image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5709953_png/idyllia-drop-earrings--mixed-cuts--pav%C3%A9--butterfly--multicolored--gold-tone-plated-swarovski-5709953.png",
    image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5709953_ms1/idyllia-drop-earrings--mixed-cuts--pav%C3%A9--butterfly--multicolored--gold-tone-plated-swarovski-5709953.jpg"
  },
  {
      id: 21,
      name: "Gema Tennis Necklace - Yellow",
      price: "₹18,500",
      category: "necklace",
      image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5718071_png/gema-tennis-necklace--mixed-cuts--yellow--gold-tone-plated-swarovski-5718071.png",
      image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5718071_ms1/gema-tennis-necklace--mixed-cuts--yellow--gold-tone-plated-swarovski-5718071.jpg"
    },
    {
      id: 22,
      name: "Hyperbola Pendant - White",
      price: "₹11,000",
      category: "necklace",
      image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5698547_png/hyperbola-pendant--mixed-cuts--white--rhodium-plated-swarovski-5698547.png",
      image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5698547_ms1/hyperbola-pendant--mixed-cuts--white--rhodium-plated-swarovski-5698547.jpg"
    },
    {
      id: 23,
      name: "Dazzling Swan Pendant - Pink",
      price: "₹8,999",
      category: "necklace",
      image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5473024_png/dazzling-swan-pendant--swan--pink--rose-gold-tone-plated-swarovski-5473024.png",
      image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5473024_ms1/dazzling-swan-pendant--swan--pink--rose-gold-tone-plated-swarovski-5473024.jpg"
    },
    {
      id: 24,
      name: "Idyllia Necklace - Multicolored Flower",
      price: "₹14,300",
      category: "necklace",
      image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5709030_png/idyllia-necklace--mixed-cuts--flower--multicolored--gold-tone-plated-swarovski-5709030.png",
      image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5709030_ms1/idyllia-necklace--mixed-cuts--flower--multicolored--gold-tone-plated-swarovski-5709030.jpg"
    },
    {
      id: 25,
      name: "Matrix Pendant - Blue",
      price: "₹9,500",
      category: "necklace",
      image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5732265_png/matrix-pendant--mixed-cuts--blue--rhodium-plated-swarovski-5732265.png",
      image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5732265_ms1/matrix-pendant--mixed-cuts--blue--rhodium-plated-swarovski-5732265.jpg"
    },
    {
      id: 26,
      name: "Gema Necklace - Multicolored",
      price: "₹16,200",
      category: "necklace",
      image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5656397_png/gema-necklace--mixed-cuts--multicolored--rhodium-plated-swarovski-5656397.png",
      image2: "https://asset.swarovski.com/images/$size_2000/t_swa002/c_scale,dpr_2.0,f_auto,w_2000/5656397_ms1/gema-necklace--mixed-cuts--multicolored--rhodium-plated-swarovski-5656397.jpg"
    },
    {
      id: 27,
      name: "Matrix Choker - White",
      price: "₹13,800",
      category: "necklace",
      image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5726295_png/matrix-choker--mixed-cuts--white--rhodium-plated-swarovski-5726295.png",
      image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5726295_ms1/matrix-choker--mixed-cuts--white--rhodium-plated-swarovski-5726295.jpg"
    },
    {
      id: 28,
      name: "Idyllia Y Pendant - Flower Multicolored",
      price: "₹10,999",
      category: "necklace",
      image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5717158_png/idyllia-y-pendant--mixed-cuts--flower--multicolored--gold-tone-plated-swarovski-5717158.png",
      image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5717158_ms1/idyllia-y-pendant--mixed-cuts--flower--multicolored--gold-tone-plated-swarovski-5717158.jpg"
    },
    {
      id: 29,
      name: "Millenia Choker - White Octagon",
      price: "₹12,700",
      category: "necklace",
      image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5696290_png/millenia-choker--octagon-cut--white--rhodium-plated-swarovski-5696290.png",
      image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5696290_ms1/millenia-choker--octagon-cut--white--rhodium-plated-swarovski-5696290.jpg"
    },
    {
      id: 30,
      name: "Millenia Tennis Necklace - White",
      price: "₹17,999",
      category: "necklace",
      image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5705789_png/millenia-tennis-necklace--octagon-cut--white--rhodium-plated-swarovski-5705789.png",
      image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5705789_ms1/millenia-tennis-necklace--octagon-cut--white--rhodium-plated-swarovski-5705789.jpg"
    },
    {
      id: 31,
      name: "Idyllia Y Necklace - Pink Butterfly",
      price: "₹11,250",
      category: "necklace",
      image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5636420_png/idyllia-lilia-y-necklace--butterfly--pink--rose-gold-tone-plated-swarovski-5636420.png",
      image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5636420_ms1/idyllia-lilia-y-necklace--butterfly--pink--rose-gold-tone-plated-swarovski-5636420.jpg"
    },
    {
      id: 32,
      name: "Swan Pendant - Yellow",
      price: "₹8,400",
      category: "necklace",
      image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5647553_png/swan-pendant--swan--medium--yellow--gold-tone-plated-swarovski-5647553.png",
      image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5647553_ms1/swan-pendant--swan--medium--yellow--gold-tone-plated-swarovski-5647553.jpg"
    },
    {
      id: 33,
      name: "Millenia Layered Necklace - White",
      price: "₹15,300",
      category: "necklace",
      image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5717913_png/millenia-layered-necklace--mixed-cuts--white--rhodium-plated-swarovski-5717913.png",
      image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5717913_ms2/millenia-layered-necklace--mixed-cuts--white--rhodium-plated-swarovski-5717913.jpg"
    },
    {
      id: 34,
      name: "Idyllia Pendant - Clover Green",
      price: "₹7,900",
      category: "necklace",
      image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5671144_png/idyllia-pendant--clover--green--gold-tone-plated-swarovski-5671144.png",
      image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5671144_ms1/idyllia-pendant--clover--green--gold-tone-plated-swarovski-5671144.jpg"
    },
    {
      id: 35,
      name: "Millenia Tennis Necklace - Green",
      price: "₹16,000",
      category: "necklace",
      image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5671257_png/millenia-tennis-necklace--octagon-cut--color-gradient--green--gold-tone-plated-swarovski-5671257.png",
      image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5671257_ms1/millenia-tennis-necklace--octagon-cut--color-gradient--green--gold-tone-plated-swarovski-5671257.jpg"
    },
    {
      id: 36,
      name: "Lucent Choker - Yellow",
      price: "₹13,300",
      category: "necklace",
      image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5720208_png/lucent-choker--octagon-shape--yellow--gold-tone-plated-swarovski-5720208.png",
      image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5720208_ms1/lucent-choker--octagon-shape--yellow--gold-tone-plated-swarovski-5720208.jpg"
    },
    {
      id: 37,
      name: "Dextera Pendant - Loop White",
      price: "₹9,600",
      category: "necklace",
      image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5668820_png/dextera-pendant--interlocking-loop--white--gold-tone-plated-swarovski-5668820.png",
      image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5668820_ms1/dextera-pendant--interlocking-loop--white--gold-tone-plated-swarovski-5668820.jpg"
    },
    {
      id: 38,
      name: "Hyperbola Pendant - Infinity Rose",
      price: "₹10,200",
      category: "necklace",
      image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5677623_png/hyperbola-pendant--infinity--white--rose-gold-tone-plated-swarovski-5677623.png",
      image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5677623_ms1/hyperbola-pendant--infinity--white--rose-gold-tone-plated-swarovski-5677623.jpg"
    },
    {
      id: 39,
      name: "Idyllia Pendant - Shell White",
      price: "₹9,900",
      category: "necklace",
      image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5683966_png/idyllia-pendant--crystal-pearl--shell--white--gold-tone-plated-swarovski-5683966.png",
      image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5683966_ms3/idyllia-pendant--crystal-pearl--shell--white--gold-tone-plated-swarovski-5683966.jpg"
    },
    {
      id: 40,
      name: "Idyllia Pendant - Starfish Multicolored",
      price: "₹10,799",
      category: "necklace",
      image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5684116_png/idyllia-pendant--crystal-pearls--starfish--multicolored--gold-tone-plated-swarovski-5684116.png",
      image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5684116_ms1/idyllia-pendant--crystal-pearls--starfish--multicolored--gold-tone-plated-swarovski-5684116.jpg"
    },
  
      {
        id: 41,
        name: "Idyllia Cocktail Ring - Pink Flower",
        price: "₹7,800",
        category: "ring",
        image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5650565_png/idyllia-cocktail-ring--pav%C3%A9--flower--pink--gold-tone-plated-swarovski-5650565.png",
        image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5650565_ms1/idyllia-cocktail-ring--pav%C3%A9--flower--pink--gold-tone-plated-swarovski-5650565.jpg"
      },
      {
        id: 42,
        name: "Millenia Open Ring - Blue",
        price: "₹9,500",
        category: "ring",
        image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5694138_png/millenia-open-ring--octagon-cut--blue--rhodium-plated-swarovski-5694138.png",
        image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5694138_ms2/millenia-open-ring--octagon-cut--blue--rhodium-plated-swarovski-5694138.jpg"
      },
      {
        id: 43,
        name: "Matrix Ring - White Heart",
        price: "₹8,400",
        category: "ring",
        image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5648293_png/matrix-ring--mixed-cuts--heart--white--rhodium-plated-swarovski-5648293.png",
        image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5648293_ms1/matrix-ring--mixed-cuts--heart--white--rhodium-plated-swarovski-5648293.jpg"
      },
      {
        id: 44,
        name: "Constella Ring Set (2) - White",
        price: "₹10,600",
        category: "ring",
        image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5640964_png/constella-ring--set-%282%29--round-cut--white--gold-tone-plated-swarovski-5640964.png",
        image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5640964_ms1/constella-ring--set-%282%29--round-cut--white--gold-tone-plated-swarovski-5640964.jpg"
      },
      {
        id: 45,
        name: "Stilla Cocktail Ring - Green",
        price: "₹9,800",
        category: "ring",
        image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5677140_png/stilla-cocktail-ring--rectangular-cut--green--gold-tone-plated-swarovski-5677140.png",
        image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5677140_ms1/stilla-cocktail-ring--rectangular-cut--green--gold-tone-plated-swarovski-5677140.jpg"
      
       },
      {
        id: 46,
        name: "Twist Wrap Ring - White",
        price: "₹7,900",
        category: "ring",
        image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5584654_png/twist-wrap-ring--mixed-cuts--white--rhodium-plated-swarovski-5584654.png",
        image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5584654_ms1/twist-wrap-ring--mixed-cuts--white--rhodium-plated-swarovski-5584654.jpg"
      },
      {
        id: 47,
        name: "Matrix Vittore Ring - White Pear",
        price: "₹7,600",
        category: "ring",
        image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5690090_png/matrix-vittore-ring--pear-cut--white--rose-gold-tone-finish-swarovski-5690090.png",
        image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5690090_ms1/matrix-vittore-ring--pear-cut--white--rose-gold-tone-finish-swarovski-5690090.jpg"
      
        },
      {
        id: 48,
        name: "Galaxy Ring Set (2) - 1.4 ct White",
        price: "₹35,000",
        category: "ring",
        image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5710788_png/galaxy-ring--set-%282%29--lab-grown-diamonds-1.4-ct-tw--mixed-shapes--14k-white-gold-swarovski-5710788.png",
        image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5710788_ms1/galaxy-ring--set-%282%29--lab-grown-diamonds-1.4-ct-tw--mixed-shapes--14k-white-gold-swarovski-5710788.jpg"
      },
      {
        id: 49,
        name: "Galaxy Ring - 2.1 ct White",
        price: "₹38,200",
        category: "ring",
        image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5710819_png/galaxy-ring--lab-grown-diamonds-2.1-ct-tw--mixed-shapes--14k-white-gold-swarovski-5710819.png",
        image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5710819_ms1/galaxy-ring--lab-grown-diamonds-2.1-ct-tw--mixed-shapes--14k-white-gold-swarovski-5710819.jpg"
      },
      {
        id: 50,
        name: "Eternity Band Ring - Yellow Gold",
        price: "₹15,400",
        category: "ring",
        image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5710571_png/eternity-band-ring--lab-grown-diamonds-0.2-ct-tw--round-shape--14k-yellow-gold-swarovski-5710571.png",
        image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5710571_ms1/eternity-band-ring--lab-grown-diamonds-0.2-ct-tw--round-shape--14k-yellow-gold-swarovski-5710571.jpg"
      },
      {
        id: 51,
        name: "Millenia Open Ring - Green",
        price: "₹9,400",
        category: "ring",
        image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5614923_png/millenia-open-ring--octagon-cut--green--gold-tone-plated-swarovski-5614923.png",
        image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5614923_ms1/millenia-open-ring--octagon-cut--green--gold-tone-plated-swarovski-5614923.jpg"
      },
      {
        id: 52,
        name: "Lucent Cocktail Ring - Blue",
        price: "₹8,750",
        category: "ring",
        image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5600235_png/lucent-cocktail-ring--octagon-cut--blue-swarovski-5600235.png",
        image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5600235_ms1/lucent-cocktail-ring--octagon-cut--blue-swarovski-5600235.jpg"
      },
      {
        id: 53,
        name: "Gema Open Ring - Multicolored",
        price: "₹10,200",
        category: "ring",
        image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5708028_png/gema-open-ring--mixed-cuts--multicolored--gold-tone-plated-swarovski-5708028.png",
        image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5708028_ms1/gema-open-ring--mixed-cuts--multicolored--gold-tone-plated-swarovski-5708028.jpg"
      
      },
      {
        id: 54,
        name: "Hyperbola Cocktail Ring - White",
        price: "₹10,500",
        category: "ring",
        image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5610392_png/hyperbola-cocktail-ring--mixed-cuts--white--rhodium-plated-swarovski-5610392.png",
        image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5610392_ms1/hyperbola-cocktail-ring--mixed-cuts--white--rhodium-plated-swarovski-5610392.jpg"
      
        },
      {
        id: 55,
         name: "Lucent Cocktail Ring - Yellow",
        price: "₹9,900",
        category: "ring",
        image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5721600_png/lucent-cocktail-ring--octagon-shape--yellow--gold-tone-plated-swarovski-5721600.png",
        image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5721600_ms1/lucent-cocktail-ring--octagon-shape--yellow--gold-tone-plated-swarovski-5721600.jpg"
      
        },
      {
        id: 56,
        name: "Idyllia Ring - Multicolored Flower",
        price: "₹10,900",
        category: "ring",
        image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5721595_png/idyllia-ring--mixed-cuts--pav%C3%A9--flower--multicolored--gold-tone-plated-swarovski-5721595.png",
        image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5721595_ms1/idyllia-ring--mixed-cuts--pav%C3%A9--flower--multicolored--gold-tone-plated-swarovski-5721595.jpg"
      },
      {
        id: 57,
        name: "Dulcis Cocktail Ring - Multicolored",
        price: "₹9,600",
        category: "ring",
        image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5709969_png/dulcis-cocktail-ring--cushion-cut--pav%C3%A9--multicolored-swarovski-5709969.png",
        image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5709969_ms1/dulcis-cocktail-ring--cushion-cut--pav%C3%A9--multicolored-swarovski-5709969.jpg"
      },
      {
        id: 58,
        name: "Hyperbola Cocktail Ring - White",
        price: "₹11,000",
        category: "ring",
        image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5698475_png/hyperbola-cocktail-ring--mixed-cuts--white--rhodium-plated-swarovski-5698475.png",
        image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5698475_ms1/hyperbola-cocktail-ring--mixed-cuts--white--rhodium-plated-swarovski-5698475.jpg"
      },
      {
        id: 59,
        name: "Stilla Ring Set (2) - White",
        price: "₹10,100",
        category: "ring",
        image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5693506_png/stilla-ring--set-%282%29--round-cut--white--gold-tone-plated-swarovski-5693506.png",
        image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5693506_ms1/stilla-ring--set-%282%29--round-cut--white--gold-tone-plated-swarovski-5693506.jpg"
      },
      {
        id: 60,
        name: "Stilla Ring - Square Cut White",
        price: "₹8,200",
        category: "ring",
        image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5709901_png/stilla-ring--square-cut--white--silver-tone-finish-swarovski-5709901.png",
        image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5709901_ms1/stilla-ring--square-cut--white--silver-tone-finish-swarovski-5709901.jpg"
      },
        {
          id: 61,
          name: "Millenia Tennis Bracelet - Green Gradient",
          price: "₹9,300",
          category: "bracelet",
          image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5671258_png/millenia-tennis-bracelet--octagon-cut--color-gradient--green--gold-tone-plated-swarovski-5671258.png",
          image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5671258_ms1/millenia-tennis-bracelet--octagon-cut--color-gradient--green--gold-tone-plated-swarovski-5671258.jpg"
        
          },
        {
          id: 62,
          name: "Constella Bracelet - Mixed Cuts White",
          price: "₹9,200",
          category: "bracelet",
          image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5722469_png/constella-bracelet--mixed-cuts--white--rhodium-plated-swarovski-5722469.png",
          image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5722469_ms1/constella-bracelet--mixed-cuts--white--rhodium-plated-swarovski-5722469.jpg"
        },
        {
          id: 63,
          name: "Idyllia Bangle - Blue Flower",
          price: "₹8,800",
          category: "bracelet",
          image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5680014_png/idyllia-bangle--flower--blue--rhodium-plated-swarovski-5680014.png",
          image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5680014_ms1/idyllia-bangle--flower--blue--rhodium-plated-swarovski-5680014.jpg"
        },
        {
          id: 64,
          name: "Dextera Bracelet - Mixed Links White",
          price: "₹10,500",
          category: "bracelet",
          image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5642601_png/dextera-bracelet--pav%C3%A9--mixed-links--white--gold-tone-plated-swarovski-5642601.png",
          image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5642601_ms1/dextera-bracelet--pav%C3%A9--mixed-links--white--gold-tone-plated-swarovski-5642601.jpg"
        },
        {
          id: 65,
          name: "Matrix Tennis Bracelet - White",
          price: "₹7,900",
          category: "bracelet",
          image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5657662_png/matrix-tennis-bracelet--round-cut--white--gold-tone-plated-swarovski-5657662.png",
          image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5657662_ms1/matrix-tennis-bracelet--round-cut--white--gold-tone-plated-swarovski-5657662.jpg"
        },
        {
          id: 66,
          name: "Teddy Bracelet - Pink Bear",
          price: "₹6,500",
          category: "bracelet",
          image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5669169_png/teddy-bracelet--crystal-pearl--bear--pink--rose-gold-tone-plated-swarovski-5669169.png",
          image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5669169_ms1/teddy-bracelet--crystal-pearl--bear--pink--rose-gold-tone-plated-swarovski-5669169.jpg"
        },
        {
          id: 67,
          name: "Ariana Grande x Swarovski Bangle - White Pearl",
          price: "₹11,000",
          category: "bracelet",
          image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5720862_png/ariana-grande-x-swarovski-bangle--crystal-pearl--baguette-cut--white--rhodium-plated-swarovski-5720862.png",
          image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5720862_ms1/ariana-grande-x-swarovski-bangle--crystal-pearl--baguette-cut--white--rhodium-plated-swarovski-5720862.jpg"
        },
        {
          id: 68,
          name: "Millenia Bangle - White Octagon",
          price: "₹8,200",
          category: "bracelet",
          image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5696321_png/millenia-bangle--octagon-cut--white--rhodium-plated-swarovski-5696321.png",
          image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5696321_ms1/millenia-bangle--octagon-cut--white--rhodium-plated-swarovski-5696321.jpg"
        },
        {
          id: 69,
          name: "Gema Bracelet - Blue Mixed Cuts",
          price: "₹9,600",
          category: "bracelet",
          image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5666018_png/gema-bracelet--mixed-cuts--blue--rhodium-plated-swarovski-5666018.png",
          image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5666018_ms1/gema-bracelet--mixed-cuts--blue--rhodium-plated-swarovski-5666018.jpg"
        },
        {
          id: 70,
          name: "Meteora Bangle - Snow Pavé",
          price: "₹10,200",
          category: "bracelet",
          image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5684241_png/meteora-bangle--snow-pav%C3%A9--white--rhodium-plated-swarovski-5684241.png",
          image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5684241_ms2/meteora-bangle--snow-pav%C3%A9--white--rhodium-plated-swarovski-5684241.jpg"
        },
       
          {
            id: 71,
            name: "Gema Bangle - Pink Mixed Cuts",
            price: "₹9,800",
            category: "bracelet",
            image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5688481_png/gema-bangle--mixed-cuts--pink--gold-tone-plated-swarovski-5688481.png",
            image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5688481_ms1/gema-bangle--mixed-cuts--pink--gold-tone-plated-swarovski-5688481.jpg"
          },
          {
            id: 72,
            name: "Numina Bangle - White Round Cuts",
            price: "₹10,600",
            category: "bracelet",
            image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5681452_png/numina-bangle--mixed-round-cuts--white--gold-tone-plated-swarovski-5681452.png",
            image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5681452_ms1/numina-bangle--mixed-round-cuts--white--gold-tone-plated-swarovski-5681452.jpg"
          },
          {
            id: 73,
            name: "Idyllia Bangle - Yellow Flower",
            price: "₹8,700",
            category: "bracelet",
            image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5679936_png/idyllia-bangle--flower--yellow--rhodium-plated-swarovski-5679936.png",
            image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5679936_ms1/idyllia-bangle--flower--yellow--rhodium-plated-swarovski-5679936.jpg"
          },
          {
            id: 74,
            name: "Idyllia Bracelet - White Clover",
            price: "₹7,400",
            category: "bracelet",
            image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5674487_png/idyllia-bracelet--clover--white--rose-gold-tone-plated-swarovski-5674487.png",
            image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5674487_ms1/idyllia-bracelet--clover--white--rose-gold-tone-plated-swarovski-5674487.jpg"
          },
          {
            id: 75,
            name: "Ariana Grande x Swarovski Bracelet - White Pearl",
            price: "₹11,200",
            category: "bracelet",
            image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5720870_png/ariana-grande-x-swarovski-bracelet--crystal-pearl--round-cut--white--rhodium-plated-swarovski-5720870.png",
            image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5720870_ms1/ariana-grande-x-swarovski-bracelet--crystal-pearl--round-cut--white--rhodium-plated-swarovski-5720870.jpg"
          },
          {
            id: 76,
            name: "Matrix Tennis Bracelet - Green Mixed Cuts",
            price: "₹8,900",
            category: "bracelet",
            image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5666422_png/matrix-tennis-bracelet--mixed-cuts--green--rhodium-plated-swarovski-5666422.png",
            image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5666422_ms1/matrix-tennis-bracelet--mixed-cuts--green--rhodium-plated-swarovski-5666422.jpg"
          },
          {
            id: 77,
            name: "Matrix Cuff - Green Mixed Cuts",
            price: "₹9,500",
            category: "bracelet",
            image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5723576_png/matrix-cuff--mixed-cuts--green--gold-tone-plated-swarovski-5723576.png",
            image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5723576_ms1/matrix-cuff--mixed-cuts--green--gold-tone-plated-swarovski-5723576.jpg"
          },
          {
            id: 78,
            name: "Una Angelic Bracelet - Double Motif",
            price: "₹8,300",
            category: "bracelet",
            image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5732272_png/una-angelic-bracelet--round-cut--double-sided-motifs--white--rhodium-plated-swarovski-5732272.png",
            image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5732272_ms2/una-angelic-bracelet--round-cut--double-sided-motifs--white--rhodium-plated-swarovski-5732272.jpg"
          },
          {
            id: 79,
            name: "Matrix Bangle - Baguette Octagon White",
            price: "₹9,900",
            category: "bracelet",
            image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5705784_png/matrix-bangle--baguette-cut--octagon-shape--white--rhodium-plated-swarovski-5705784.png",
            image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5705784_ms1/matrix-bangle--baguette-cut--octagon-shape--white--rhodium-plated-swarovski-5705784.jpg"
          },
          {
            id: 80,
            name: "Matrix Bracelet - Baguette Knot White",
            price: "₹10,100",
            category: "bracelet",
            image1: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5731101_png/matrix-bracelet--baguette-cut--knot--white--rhodium-plated-swarovski-5731101.png",
            image2: "https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5731101_ms1/matrix-bracelet--baguette-cut--knot--white--rhodium-plated-swarovski-5731101.jpg"
          }
];
        

