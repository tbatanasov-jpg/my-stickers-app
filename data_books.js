
let allBooks = [
    { 
        id: 'b001', title: '- Архитектирни резервати в България', location: 'Копривщица', 
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
 ];