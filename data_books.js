
let allBooks = [
    { 
        id: 'b001', title: '- Архитектурни резервати в България', location: 'Копривщица', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b001.png', 
        description: 'Магнитна книжка, посветена на най-значимите архитектурни резервати в България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички архитектурни резервати, включени в книжката.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6359, lng: 24.3595 } 
    },
    { 
        id: 'b002', title: '- Български манастири', location: 'Рилски манастир', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b002.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички манастири, включени в книжката.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.1336, lng: 23.3402 } 
    },
      { 
        id: 'b003', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b003.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b004', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b004.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
    { 
        id: 'b005', title: '- Цари Мали Град', location: 'Белчин', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b005.png', 
        description: 'Късноантична римска крепост и укрепено селище, възникнало през VI век преди Христа. ',
        additionalInfo: 'Лепенкaтa може да бъде закупена от билетната каса на Етнографски музей - Белчин<br><br><b>Работно време:</b><br><br>летен сезон (април - октомври)<br>09.00 – 17.30 часа<br>събота и неделя:<br>09.00 - 18.30 часа<br>почивен ден: понеделник<br><br>зимен сезон (ноември - март)<br>09.00 – 16.30 часа<br>събота и неделя:<br>09.00 - 17.30 часа<br>почивен ден: понеделник<br><br><b>Телефон: 0886 614 814</b><br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6359, lng: 24.3595 } 
    },
    { 
        id: 'b006', title: '- София', location: 'София', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b006.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички манастири, включени в книжката.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.1336, lng: 23.3402 } 
    },
      { 
        id: 'b006А', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b006А.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b006Б', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b006Б.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
         { 
        id: 'b006В', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b006В.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b006Г', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b006Г.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
            { 
        id: 'b007', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b007.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b008', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b008.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
            { 
        id: 'b009', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b009.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b010', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b010.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
     { 
        id: 'b011', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b011.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b012', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b012.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
    { 
        id: 'b013', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b013.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b014', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b014.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
            { 
        id: 'b015', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b015.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b016', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b016.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
    { 
        id: 'b017', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b017.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b018', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b018.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
      { 
        id: 'b019', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b019.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b020', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b020.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
        { 
        id: 'b021', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b021.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b022', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b022.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
      { 
        id: 'b023', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b023.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b024', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b024.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
        { 
        id: 'b025', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b025.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b026', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b026.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
      { 
        id: 'b027', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b027.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b028', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b028.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
            { 
        id: 'b029', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b029.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b030', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b030.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
      { 
        id: 'b031', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b031.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b032', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b032.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
    { 
        id: 'b033', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b033.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b034', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b034.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
      { 
        id: 'b035', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b035.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b036', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b036.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
     { 
        id: 'b037', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b037.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b038', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b038.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
      { 
        id: 'b039', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b039.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b040', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b040.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
     { 
        id: 'b041', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b041.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b042', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b042.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
      { 
        id: 'b043', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b043.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b044', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b044.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
      { 
        id: 'b045', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b045.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b046', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b046.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
      { 
        id: 'b047', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b047.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b048', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b048.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
        { 
        id: 'b049', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b049.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b050', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b050.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
      { 
        id: 'b051', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b051.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b052', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b052.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
         { 
        id: 'b053', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b053.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b054', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b054.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
      { 
        id: 'b054А', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b054А.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b055', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b055.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
        { 
        id: 'b056', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b056.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
         { 
        id: 'b057', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b057.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b058', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b058.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
      { 
        id: 'b059', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b059.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b060', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b060.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
 ];