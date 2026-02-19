
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
           { 
        id: 'b061', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b061.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
         { 
        id: 'b062', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b062.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b063', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b063.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
      { 
        id: 'b064', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b064.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b065', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b065.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
            { 
        id: 'b066', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b066.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b067', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b067.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
      { 
        id: 'b068', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b068.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b069', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b069.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
    { 
        id: 'b070', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b070.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b071', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b071.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
      { 
        id: 'b072', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b072.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b073', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b073.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
       { 
        id: 'b074', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b074.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b075', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b075.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
      { 
        id: 'b076', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b076.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b077', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b077.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
       { 
        id: 'b078', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b078.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
      { 
        id: 'b079', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b079.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b080', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b080.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
       { 
        id: 'b081', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b081.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b082', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b082.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
       { 
        id: 'b083', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b083.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
      { 
        id: 'b084', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b084.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b085', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b085.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
        { 
        id: 'b086', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b086.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
       { 
        id: 'b087', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b087.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
      { 
        id: 'b088', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b088.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b089', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b089.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
           { 
        id: 'b090', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b090.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
       { 
        id: 'b091', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b091.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
      { 
        id: 'b091A', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b091A.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b092', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b092.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
    { 
        id: 'b093', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b093.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
    { 
        id: 'b094', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b094.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
    { 
        id: 'b095', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b095.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b095A', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b095A.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
     { 
        id: 'b096', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b096.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
    { 
        id: 'b097', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b097.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
    { 
        id: 'b098', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b098.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
    { 
        id: 'b099', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b099.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b100', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b100.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
     { 
        id: 'b101', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b101.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
    { 
        id: 'b102', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b102.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
    { 
        id: 'b103', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b103.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b104', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b104 .png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
      { 
        id: 'b105', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b105.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
     { 
        id: 'b106', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b106.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
    { 
        id: 'b107', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b107.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
    { 
        id: 'b108', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b108.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b108A', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b108A.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
        { 
        id: 'b109', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b109.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
    { 
        id: 'b110', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b110.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
    { 
        id: 'b111', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b111.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b111A', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b111A.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
    { 
        id: 'b112', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b112.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
    { 
        id: 'b113', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b113.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
    { 
        id: 'b114', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b114.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b115', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b115.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
        { 
        id: 'b116', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b116.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
    { 
        id: 'b117', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b117.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
    { 
        id: 'b118', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b118.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
    { 
        id: 'b119', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b119.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b120', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b120.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
          { 
        id: 'b121', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b121.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
    { 
        id: 'b122', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b122.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
    { 
        id: 'b123', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b123.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
    { 
        id: 'b124', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b124.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b125', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b125.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
     { 
        id: 'b126', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b126.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
    { 
        id: 'b127', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b127.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
    { 
        id: 'b128', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b128.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b129', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b129.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
       { 
        id: 'b130', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b130.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
    { 
        id: 'b131', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b131.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
    { 
        id: 'b132', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b132.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b133', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b133.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
           { 
        id: 'b134', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b134.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
    { 
        id: 'b135', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b135.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
    { 
        id: 'b136', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b136.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b137', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b137.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
        { 
        id: 'b138', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b138.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
    { 
        id: 'b139', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b139.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b140', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b140.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
       { 
        id: 'b141', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b141.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b142', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b142.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
        { 
        id: 'b144', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b144.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
    { 
        id: 'b145', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b145.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b146', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b146.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
        { 
        id: 'b147', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b147.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
        { 
        id: 'b148', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b148.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
    { 
        id: 'b149', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b149.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b150', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b150.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
    { 
        id: 'b151', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b151.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
    { 
        id: 'b152', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b152.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
    { 
        id: 'b153', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b153.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b154', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b154.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
       { 
        id: 'b155', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b155.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
    { 
        id: 'b156', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b156.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
    { 
        id: 'b157', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b157.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b158', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b158.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
       { 
        id: 'b159', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b159.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b160', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b160.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
     { 
        id: 'b161', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b161.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b162', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b162.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
       { 
        id: 'b163', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b163.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b164', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b164.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
        { 
        id: 'b165', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b165.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b166', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b166.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
       { 
        id: 'b167', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b167.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b168', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b168.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
       { 
        id: 'b169', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b169.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
        { 
        id: 'b170', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b170.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b171', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b171.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
       { 
        id: 'b172', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b172.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b173', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b173.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
        { 
        id: 'b174', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b174.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
        { 
        id: 'b175', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b175.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b176', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b176.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
       { 
        id: 'b177', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b177.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b178', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b178.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
           { 
        id: 'b179', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b179.png', 
        description: 'Магнитна книжка, посветена на най-емблематичните ястия, характерни за България. ',
        additionalInfo: 'Книжката може да бъде закупена от касите на всички туристически обекти в страната.<br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b180', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b180.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
       { 
        id: 'b189', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b189.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.',
        additionalInfo: ' Книжката може да бъде закупена от касите на всички туристически обекти в страната. <br><br><br><br><br><br>.'  ,
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
 ];