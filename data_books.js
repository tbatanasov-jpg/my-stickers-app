
let allBooks = [
    { 
        id: 'b001', title: '- Архитектурни резервати в България', location: 'Копривщица', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b001.png', 
        description: 'Магнитна книжка, посветена на най-значимите архитектурни резервати в България.<br><br><br><br><br><br>. ',
        coords: { lat: 42.6359, lng: 24.3595 } 
    },
    { 
        id: 'b002', title: '- Български манастири', location: 'Рилски манастир', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b002.png', 
        description: 'Магнитна книжка, посветена на най-значителните манастири в България.<br><br><br><br><br><br>.',
        coords: { lat: 42.1336, lng: 23.3402 } 
    },
      { 
        id: 'b003', title: '- Традиционна българска кухня', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b003.png', 
        description: 'Традиционна българска кухня е формирана от сливането на кухните на траки, славяни и прабългари. Всяка етническа група включва своите кулинарни традиции.<br><br><br><br><br><br>. ',
        coords: { lat: 42.6908, lng: 23.3359 } 
    },
    { 
        id: 'b004', title: '- Земя на рози', location: 'Казанлък', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b004.png', 
        description: 'България се е прославила през вековете със своята маслодайната роза, която е с най-високо качество. От цветовете на розите се получава Розово масло и Розова вода.<br><br><br><br><br><br>.',
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
    { 
        id: 'b005', title: '- Цари Мали Град', location: 'Белчин', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b005.png', 
        description: 'Късноантична римска крепост и укрепено селище, възникнало през VI век преди Христа.<br><br><br><br><br><br>. ',
        coords: { lat: 42.3572, lng: 23.3832 } 
    },
    { 
        id: 'b006', title: '- София', location: 'София', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b006.png', 
        description: 'Со̀фия е столицата на България. Тя е древен град, който е оцелял през вековете. Днес София е основен административен, индустриален, транспортен, културен и образователен център на страната.<br><br><br><br><br><br>. ',
        coords: { lat: 42.6975, lng: 23.3219 }  
    },
      { 
        id: 'b006А', title: '- Нациолен Археологически Музей - София', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b006А.png', 
        description: 'Най-старият археологически музей в България, съществуващ от 1892 г. Разполага с пет основни изложбени зали: Централна зала, зала „Праистория“, зала „Средновековие“, зала „Трезор“ и зала за временни изложби.<br><br><br><br><br><br>.  ',
        coords: { lat: 42.6964, lng: 23.3245 } 
    },
    { 
        id: 'b006Б', title: '- Боянска църква', location: 'София', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b006Б.png', 
        description: 'Боянската църква „Св. св. Никола и Пантелеймон“ е средновековна българска църква. Представлява двуетажена църква-гробница с долен етаж, предназначен за крипта (гробница) и горен - семеен параклис.<br><br><br><br><br><br>.',
        coords: { lat: 42.6448, lng: 23.2661 } 
    },
    { 
        id: 'b006В', title: '- Национален Исторически Музей', location: 'София', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b006В.png', 
        description: 'Най-големият музей в България. В сегашната си сграда се помещава от 1998 г. Колекциите му съдържат над 650 000 експоната.<br><br><br><br><br><br>. ',
        coords: { lat: 42.6553, lng: 23.2709 } 
    },
    { 
        id: 'b006Г', title: '- Национален Политехнически Музей ', location: 'София', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b006Г.png', 
        description: 'Музеят е основан на 13 май 1957 г. Във фондовете си Националният политехнически музей съхранява над 22 000 експоната. Разпределени са по колекции: времеизмерване, транспорт, фотографска техника и кинотехника, оптика, звукозапис, радио и телевизия, изчислителна техника, музикални механизми, геодезически уреди, измервателна техника, битова техника, шевни машини, пишещи машини, физични уреди, съобщителна техника.<br><br><br><br><br><br>.',
        coords: { lat: 42.7043, lng: 23.3114 } 
    },
            { 
        id: 'b007', title: '- Копривщица', location: 'Копривщица', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b007.png', 
        description: 'Град Копривщица е единствения град музей в страната. През 1971 г. е обявен за архитектурен и исторически резерват, разполагащ с 388 архитектурни, исторически, художествени и етнографски паметници.<br><br><br><br><br><br>. ',
        coords: { lat: 42.6405, lng: 24.3575 } 
    },
    { 
        id: 'b008', title: '- Боровец', location: 'Боровец', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b008.png', 
        description: ' Първият планински курорт в България. Предлага отлични условия за планински туризъм и спорт: алпийски ски, сноуборд, ски бягане, планинско колоездене.<br><br><br><br><br><br>.',
        coords: { lat: 42.2688, lng: 23.6064} 
    },
            { 
        id: 'b009', title: '- Седемте рилски езера ', location: 'Рила', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b009.png', 
        description: ' Седемте рилски езера са група езера с ледников произход, разположена в Рила планина. Името на всяко от езерата отразява някоя негова особеност.<br><br><br><br><br><br>.',
        coords: { lat: 42.2033, lng: 23.3199 } 
    },
    { 
        id: 'b010', title: '- Кюстендил', location: 'Кюстендил', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b010.png', 
        description: 'Градът е балнеоложки и туристически център с национално и международно значение. Множеството минерални извори в съчетание с умерения климат, прекрасната природа и богатото културно-историческо наследство са благоприятни предпоставки за развитие на различни форми на туризъм. <br><br><br><br><br><br>. ',
        coords: { lat: 42.2809, lng: 22.6872 } 
    },
     { 
        id: 'b011', title: '- Благоевград', location: 'Благоевград', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b011.png', 
        description: 'Културен и образователен център на Югозападна България. Намира се на 360 m надморска височина в близост до Пирин планина.<br><br><br><br><br><br>. ',
        coords: { lat: 42.0124, lng: 23.0952 }  
    },
    { 
        id: 'b012', title: '- Стобски пирамиди', location: 'Стоб', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b012.png', 
        description: 'Пирамидите са сложна композиция от остри и игловидни пирамидални или конусовидни земни форми.<br><br><br><br><br><br>.',
        coords: { lat: 42.0924, lng: 23.1218 } 
    },
    { 
        id: 'b013', title: '- Рилски манастир', location: 'Рила', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b013.png', 
        description: 'Манастир „Свети Йоан Рилски“ е ставропигиален манастир на Българската православна църква. Той е сред най-значимите културни паметници в България.<br><br><br><br><br><br>. ',
        coords: { lat: 42.1336, lng: 23.3402 } 
    },
    { 
        id: 'b014', title: '- Банско', location: 'Банско', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b014.png', 
        description: 'Един от големите зимни курорти в България. Намира се в подножието на Пирин, на 927 м надморска височина.<br><br><br><br><br><br>.',
        coords: { lat: 41.8393, lng: 23.4857 } 
    },
            { 
        id: 'b015', title: '- Сандански', location: 'Сандански', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b015.png', 
        description: ' Градът представлява природен санаториум за лечение на заболявания на дихателната система, намиращ се в подножието на Пирин планина. <br><br><br><br><br><br>.',
        coords: { lat: 41.5577, lng: 23.2747 } 
    },
    { 
        id: 'b016', title: '- Пещера "Магура"', location: 'Белоградчик', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b016.png', 
        description: ' Една от най-големите пещери в България. Общата дължина на галериите ѝ е 2,5 км. В пещерата се поддържа постоянна температура от 12 °C. <br><br><br><br><br><br>.',
        coords: { lat: 43.7280, lng: 22.5826 } 
    },
    { 
        id: 'b017', title: '- Мелник', location: 'Мелник', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b017.png', 
        description: ' Най-малкият град в България. Намира се в югозападните части на Пирин планина. Основен поминък на населението са винопроизводството и туризмът.<br><br><br><br><br><br>.  ',
        coords: { lat: 41.5235, lng: 23.3912 } 
    },
    { 
        id: 'b018', title: '- Мездра', location: 'Мездра', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b018.png', 
        description: ' Градът е разположен край река Искър. Основан е, когато се построява железопътната линия София – Горна Оряховица в края на 19 век.<br><br><br><br><br><br>.',
        coords: { lat: 43.1446, lng: 23.7114 } 
    },
    { 
        id: 'b019', title: '- Враца', location: 'Враца', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b019.png', 
        description: ' Разположен в полите на Врачанската планина. Административен и стопански център на едноименната област.<br><br><br><br><br><br>.',
        coords: { lat: 43.2057, lng: 23.5527 } 
    },
    { 
        id: 'b020', title: '- Белоградчик', location: 'Белоградчик', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b020.png', 
        description: ' Градът е сред атрактивните туристически обекти на България. Предлага възможности за туризъм, алпинизъм, лов и риболов.<br><br><br><br><br><br>.',
        coords: { lat: 43.6270, lng: 22.6809 } 
    },
        { 
        id: 'b021', title: '- Видин', location: 'Видин', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b021.png', 
        description: ' Град с многовековна история, разположен на северозападния бряг на река Дунав.<br><br><br><br><br><br>. ',
        coords: { lat: 43.9919, lng: 22.8689 } 
    },
    { 
        id: 'b022', title: '- Етрополе', location: 'Етрополе', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b022.png', 
        description: ' Древен град с над 2500-годишна история. Местоположението и природните условия на района благоприятстват стопанското развитие и търговията.<br><br><br><br><br><br>.',
        coords: { lat: 42.8307, lng: 23.9945 } 
    },
      { 
        id: 'b023', title: '- Пещера "Съева дупка"', location: 'Брестница', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b023.png', 
        description: ' Една от най-красивите пещери на България. Богата е на сталактити, сталагмити, сталактони, хеликтити и дендрити.<br><br><br><br><br><br>.',
        coords: { lat: 43.0469, lng: 24.1858 } 
    },
    { 
        id: 'b024', title: '- Плевен', location: 'Плевен', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b024.png', 
        description: 'Административен център на област Плевен. Градът е туристически център, известен като „Град на музеите“.<br><br><br><br><br><br>.',
        coords: { lat: 43.4077, lng: 24.6205 } 
    },
        { 
        id: 'b025', title: '- Ловеч', location: 'Ловеч', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b025.png', 
        description: ' Градът е разположен от двете страни на река Осъм. Средната надморска височина на Ловеч е 360 м. <br><br><br><br><br><br>. ',
        coords: { lat: 43.1395, lng: 24.7107 } 
    },
    { 
        id: 'b026', title: '- Троянски манастир', location: 'Орешак', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b026.png', 
        description: ' Третия по големина ставропигиален манастир в България. Основан е около 1600 година на брега на река Черни Осъм.<br><br><br><br><br><br>. ',
        coords: { lat: 42.8621, lng: 24.7809 } 
    },
      { 
        id: 'b027', title: '- Русе', location: 'Русе', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b027.png', 
        description: ' Най-големият български град по поречието на река Дунав, известен с богатото си историческо минало и великолепната си архитектура. <br><br><br><br><br><br>. ',
        coords: { lat: 43.8362, lng: 25.9608 } 
    },
    { 
        id: 'b028', title: '- Природен парк "Русенски Лом"', location: 'Русе', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b028.png', 
        description: ' Територията на природния парк е 3260 хектара. Намира се на около 20 км от град Русе. На много места в парка има следи от тракийски селища и светилища.<br><br><br><br><br><br>.',
        coords: { lat: 43.7043, lng: 25.97618 } 
    },
            { 
        id: 'b029', title: '- Свищов', location: 'Свищов', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b029.png', 
        description: 'Свищов е град в Северна България, разположен на брега на река Дунав. Той е известен като важен търговски и културен център още от Възраждането. Градът впечатлява с красива крайдунавска алея и богато историческо наследство.<br><br><br><br><br><br>. ',
        coords: { lat: 43.6160, lng: 25.3526 } 
    },
    { 
        id: 'b030', title: '- Силистра', location: 'Силистра', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b030.png', 
        description: 'Силистра е град в Североизточна България. Той е сред най-старите градове в страната. В Силистра се намира крепост "Меджиди табия", запазена османска военна постройка. Градът е известен със своя живописен Дунавски парк и културни традиции.<br><br><br><br><br><br>.',
        coords: { lat: 44.1148, lng: 27.2620 }  
    },
      { 
        id: 'b031', title: '- Арбанаси', location: 'Арбанаси', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b031.png', 
        description: 'Живописно село, намиращо се близо до Велико Търново. То е известно със своите възрожденски къщи и богато културно-историческо наследство. Сред най-забележителните му обекти е Църква „Рождество Христово“, прочута със стенописите си.<br><br><br><br><br><br>. ',
        coords: { lat: 43.0984, lng: 25.6649 }  
    },
    { 
        id: 'b032', title: '- Сборяново', location: 'Свещари', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b032.png', 
        description: 'Историко-археологически резерват, разположен край село Свещари. Районът е известен с богатото си тракийско наследство и живописната природа. В него се намира "Свещарска гробница". Резерватът привлича посетители със съчетание от история, археология и природна красота.<br><br><br><br><br><br>.',
        coords: { lat: 43.7368, lng: 26.7528 } 
    },
    { 
        id: 'b033', title: '- Велико Търново', location: 'Велико Търново', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b033.png', 
        description: 'Разположен сред хълмовете край река Янтра. Градът е бил столица на Второто българско царство и важен политически и културен център през Средновековието. В него се намира крепостта "Царевец". Градът съчетава богато историческо наследство, оживена културна сцена и впечатляващи гледки.<br><br><br><br><br><br>. ',
        coords: { lat: 43.0837, lng: 25.6501 } 
    },
    { 
        id: 'b034', title: '- Троян', location: 'Троян', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b034.png', 
        description: 'Живописен град в Централна Северна България. Той е известен със своите традиции в занаятите, особено прочутата троянска керамика. Троян привлича посетители с красива природа и възможности за туризъм.<br><br><br><br><br><br>.',
        coords: { lat: 42.8807, lng: 24.7111 } 
    },
      { 
        id: 'b035', title: '- Елена', location: 'Елена', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b035.png', 
        description: 'Малък възрожденски град, известен със своята добре запазена  възрожденска архитектура. В града се намира архитектурно-историческият комплекс Даскалоливница, свързан с развитието на просветното дело у нас. Елена привлича посетители с красива природа, традиции и усещане за автентичен български дух.<br><br><br><br><br><br>. ',
        coords: { lat: 42.9279, lng: 25.8760 } 
    },
    { 
        id: 'b036', title: '- Трявна', location: 'Трявна', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b036.png', 
        description: 'Възрожденски град, сгушен в полите на Стара планина. Той е известен със своята дърворезбарска и иконописна школа. Сред символите на града е Часовниковата кула в центъра на стария град. Трявна впечатлява с калдъръмените си улички, възрожденските къщи и уютната си атмосфера.<br><br><br><br><br><br>.',
        coords: { lat: 42.8698, lng: 25.4961 } 
    },
     { 
        id: 'b037', title: '- Габрово', location: 'Габрово', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b037.png', 
        description: 'Градът е разположен по поречието на река Янтра. Известен е като столицата на хумора и сатирата в страната. В града се намира "Дом на хумора и сатирата". Габрово съчетава богати възрожденски традиции, индустриална история и красиви планински пейзажи.<br><br><br><br><br><br>. ',
        coords: { lat: 42.8726, lng: 25.3199 } 
    },
    { 
        id: 'b038', title: '- Етър', location: 'Габрово', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b038.png', 
        description: 'Етнографски музей на открито „Етър“ представя българския бит, занаяти и архитектура от периода на Възраждането. Музеят е изграден като възстановка на старинна занаятчийска чаршия с автентични къщи и работилници. Посетителите могат да наблюдават майстори, които демонстрират традиционни занаяти като грънчарство, дърворезба и тъкачество.<br><br><br><br><br><br>.',
        coords: { lat: 42.8109, lng: 25.3457 } 
    },
      { 
        id: 'b039', title: '- Боженци', location: 'Боженци', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b039.png', 
        description: 'Архитектурно-исторически резерват „Боженци“ е живописно селище край Габрово, запазило духа на Българското възраждане. Калдъръмените улици и характерните къщи с каменни основи и дървени чардаци създават автентична атмосфера. Резерватът представя традиционния бит, занаятите и архитектурата от XVIII и XIX век.<br><br><br><br><br><br>. ',
        coords: { lat: 42.8738, lng: 25.4249 } 
    },
    { 
        id: 'b040', title: '- Дряновски манастир', location: 'Дряново', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b040.png', 
        description: 'Манастирът се намира в живописния пролом на река Дряновска, близо до град Дряново. Основан през Средновековието, той играе важна роля в духовния и културния живот на региона. Манастирът е свързан с героични събития по време на Априлското въстание. Днес той впечатлява посетителите с красивата си природа, спокойна атмосфера и близостта до пещерата Бачо Киро.<br><br><br><br><br><br>.',
        coords: { lat: 42.9509, lng: 25.4321 } 
    },
     { 
        id: 'b041', title: '- Шумен', location: 'Шумен', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b041.png', 
        description: 'Град в Североизточна България с богата история и стратегическо значение. Над него се намира Шуменска крепост, която има тракийско, римско и средновековно минало. В близост до града се намира Паметник „Създатели на българската държава“, посветен на 1300-годишнината на България.<br><br><br><br><br><br>. ',
        coords: { lat: 43.2662, lng: 26.9416 } 
    },
    { 
        id: 'b042', title: '- Мадарски конник', location: 'Мадара', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b042.png', 
        description: 'Уникален скален релеф, изсечен върху отвесна скала край село Мадара. Датиран е през VIII век и изобразява конник в естествена големина, който пронизва лъв с копие. Паметникът е свързан с ранната българска държава. Включен в списъка на световното културно наследство на ЮНЕСКО.<br><br><br><br><br><br>.',
        coords: { lat: 43.2780, lng: 27.1189 } 
    },
      { 
        id: 'b043', title: '- Плиска', location: 'Плиска', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b043.png', 
        description: 'Плиска е първата столица на Първа българска държава и важен политически и културен център през ранното Средновековие. Градът е основан през VII век и се свързва с управлението на хан Аспарух. В Плиска се намират внушителните останки на Голямата базилика в Плиска, една от най-големите християнски църкви в Европа по онова време.<br><br><br><br><br><br>.',
        coords: { lat: 43.3634, lng: 27.1232 } 
    },
    { 
        id: 'b044', title: '- Велики Преслав', location: 'Велики Преслав', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b044.png', 
        description: 'Велики Преслав е втората столица на Първа българска държава и един от най-значимите културни центрове на средновековна България. Градът става столица през 893 г. по време на управлението на цар Симеон I Велики. Тук се развива прочутата Преславска книжовна школа, която има огромен принос за разпространението на славянската писменост и култура.<br><br><br><br><br><br>. ',
        coords: { lat: 42.6207, lng: 25.3973 } 
    },
      { 
        id: 'b045', title: '- Разград', location: 'Разград', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b045.png', 
        description: 'Разград е град в Североизточна България с богата история и културно наследство. В близост до него се намира археологическият резерват Абритус, останките от древен римски град. Разград е известен и със своя културен и спортен живот, включително футболния клуб "Лудогорец" Разград.<br><br><br><br><br><br>.  ',
        coords: { lat: 43.5249, lng: 26.5242 } 
    },
    { 
        id: 'b046', title: '- Варна', location: 'Варна', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b046.png', 
        description: 'Варна е най-големият град по българското Черноморие и често е наричан морската столица на страната. Той е важен културен, туристически и икономически център с дълга история, започваща още от античността. Сред най-известните му забележителности са Варненски археологически музей и красивата Морска градина.<br><br><br><br><br><br>.',
        coords: { lat: 43.2113, lng: 27.9151 } 
    },
      { 
        id: 'b047', title: '- Аладжа манастир', location: 'Варна', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b047.png', 
        description: 'Аладжа манастир е средновековен скален манастир, разположен близо до Варна. Манастирът е издялан директно в скалите и представлява уникален комплекс от килии, църкви и коридори. Смята се, че е бил действащ между XIII и XIV век и е свързан с отшелническия живот на монасите.<br><br><br><br><br><br>. ',
        coords: { lat: 43.2782, lng: 28.01547 } 
    },
    { 
        id: 'b048', title: '- Музей на мозайките - Девня', location: 'Девня', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b048.png', 
        description: 'Специализиран музей, посветен на римски и ранновизантийски мозайки, открити при археологически разкопки на древния град Марцианопол. Той е изграден върху останките на голяма късноримска сграда (villa urbana), където са запазени великолепни многоцветни подови мозайки, показващи сцени от митологията, животни и геометрични мотиви. Музеят съхранява и представя археологически находки и реконструкции, които дават представа за живота и изкуството в една от значимите римски провинциални градове.<br><br><br><br><br><br>.',
        coords: { lat: 43.2252, lng: 27.5850 } 
    },
        { 
        id: 'b049', title: '- Обзор', location: 'Обзор', 
        isCollected: false, isWanted: false,
        imagePath: 'Images/Books/b049.png', 
        description: 'Обзор е живописен морски курорт, разположен на българското Черноморие между Варна и Бургас. Градът е известен със своите широки плажове, чиста морска вода и спокойна атмосфера, подходяща както за семейни почивки, така и за отдих сред природата. В района има исторически забележителности, като останките от античния град Несебърския крепостен комплекс и живописни хълмове с панорамни гледки.<br><br><br><br><br><br>. ',
        coords: { lat: 42.8223, lng: 27.8809 }  
    },
    { 
        id: 'b050', title: '- Св. Св. Константин и Елена', location: 'Варна', 
        isCollected: false, isWanted: false, 
        imagePath: 'Images/Books/b050.png', 
        description: 'Свети Св. Константин и Елена е един от най-старите и популярни български морски курорти, разположен близо до Варна. Той е известен с минералните си извори и лечебни спа центрове, които привличат туристи целогодишно. Курортът предлага красива природа, плажове и възможности за спорт и отдих сред спокойна обстановка.<br><br><br><br><br><br>.',
        coords: { lat: 43.2279, lng: 28.0080 } 
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