
$(document).ready(function(){
    const main = $('#main');
    const info = $('#info')
    const animationBox = $('.animation_box');         
    let vmax;
    let thisIdHover;
    let dadaSystem = {
        'scadrian' : {
            info: `<div class="info__main_data">
                <div class="main_data__logo_system"><img src="img/scadrian_logo.svg" alt=""></div>
                <h2 class="main_data__head_text">The Sacadrian system</h2>
                <div class="main_data__space_line"></div>
                <p class="main_data__description_text">The Scadrian system is the name given to the planetary system containing the planet of Scadrial. In addition to Scadrial, the system includes two gas giants, two dwarf planets, and a comet belt.</p>
                <div class="main_data__arrow"></div>
            </div>        
            <div class="info__secondary_data">
                <h3 class="head_text">Planets</h3>
                <p class="paragraph_text"><span>Scadrial:</span> The Mistborn series is set on this planet. It was created entirely by the Shards of Preservation and Ruin, who made their home here. The planet's orbit has changed multiple times. At the onset of the Final Empire, Rashek used the power at the Well of Ascension to bring the planet nearer the sun in order to burn away the Deepness. This necessitated the creation of ashmounts to block out the too-close sun. Harmony corrected the orbit to its current position upon his Ascension.</p>
                <p class="paragraph_text"><span>Aagal Nod:</span> A blue gas giant with six moons. The largest planet in the Scadrian system.</p>            
                <p class="paragraph_text"><span>Aagal Uch:</span> A red gas giant with five moons and a ring. A comet belt lies beyond Aagal Uch.</p>            
                <p class="paragraph_text"><span>Dwarf planets:</span> Two unnamed dwarf planets lie outside of the Scadrian system's comet belt.</p>
            </div>
            <div class="info__secondary_data">
                <h3 class="head_text">Astronomy</h3>
                <p class="paragraph_text">In physical space, Roshar appears to be the nearest solar system. Its star is part of the "The Giver" constellation. The Scadrian Cognitive Realm is known as Expanse of the Vapors, and can be accessed from Roshar. It is close enough to the Threnodite Cognitive Realm that shades appearing at its borders are a legitimate concern.</p>
            </div>
            <div class="info__secondary_data">
                <h3 class="head_text">Inhabitants</h3>
                <p class="paragraph_text">The inhabitants of Scadrial were created by Ruin and Preservation in the image of Yolish humans. The Final Empire saw the creation of two additional species - the shapeshifting kandra and near-mindless koloss - through Shardic intervention and the use of Hemalurgy on humans. Following the Catacendre, the koloss became a true breeding race, the koloss-blooded.</p>
                <p class="paragraph_text">As of right now, the other planets in the system are uninhabited.</p>
            </div>
            <div class="info__secondary_data">
                <h3 class="head_text">History</h3>
                <p class="paragraph_text">The planet of Scadrial did not exist prior to the Shattering. The Shards of Preservation and Ruin decided to create the planet from scratch, under the stipulation that Ruin would later be allowed to destroy it. However, Preservation betrayed Ruin, trapping him in the Well of Ascension, one of Scadrial's two Perpendicularities, to prevent the destruction, at the cost of his own mind and a significant chunk of his power.</p>
                <p class="paragraph_text">At some point, a Selish organization called the Ire set up a base in the Scadrian Cognitive Realm, intending to claim the Shard of Preservation once its holder was dead.</p>
                <p class="paragraph_text">Over centuries, several people have held the power of the Well of Ascension. A number of civilizations have developed during that period, and the technological advancement had almost reached the steam age. The penultimate of those holders was a Terrisman named Rashek, who moved the planet closer to the sun in an attempt to burn away the Deepness while holding the power, and folded all the existing states into the Final Empire under his rule. The last holder, Vin, chose to release the power - releasing Ruin as well - due to the Shard's misdirection. The following events saw Ruin and Preservation merged into Harmony, who restored the system to its previous orbit and rejuvenated the land in an event known as the Catacendre.</p>
                <p class="paragraph_text">While the civilization on Scadrial has since recovered from this ordeal, in recent years the system appears to be invaded by an unknown power.</p>
            </div>`
        },
        'nalthian': {
            info: `<div class="info__main_data">
            <div class="main_data__logo_system"><img src="img/nalthian_logo.svg" alt=""></div>
            <h2 class="main_data__head_text">The Nalthian system</h2>
            <div class="main_data__space_line"></div>
            <p class="main_data__description_text">The Nalthian system is the name given to the planetary system containing the planet of Nalthis. In addition to Nalthis, it includes one gas giant, one outer planet, a comet belt, and a cognitive anomaly manifesting in the Physical Realm. Notably, both of the non-inhabited planets are named like the Returned, such as Lightsong the Brave.</p>
            <div class="main_data__arrow"></div>
        </div>        
        <div class="info__secondary_data">
            <h3 class="head_text">Planets</h3>
            <p class="paragraph_text"><span>Nalthis:</span> Nalthis is the only planet in the system known to be inhabited -- it has a large human population and a Shard, Endowment. Humans on Nalthis differ from those elsewhere in the cosmere in that they are born with Breath, Endowment's Investiture. Breath provides a number of passive benefits, as well as fuel for the local magic system, Awakening.</p>
            <p class="paragraph_text">Nalthis has one moon, Rrendos. It also shares its orbit with an unspecified cognitive anomaly, although it's unknown whether it passes through it once a year, or if the anomaly follows the planet's motion.</p>
            <p class="paragraph_text"><span>Farkeeper the Bright:</span> A red gas giant, and the largest planet in the Nalthian system. It has at least six moons orbiting it.</p>
            <p class="paragraph_text"><span>Nightstar the Hidden:</span> A small, violet outer planet, located at a considerable distance from Farkeeper. A comet belt lies beyond Nightstar, marking the system's edge.</p>
        </div>
        <div class="info__secondary_data">
            <h3 class="head_text">Astronomy</h3>
            <p class="paragraph_text">The Nalthian sun is a yellow star, similar to those of Scadrial and Sel. The system is located in "The Giver" constellation. Its closest known stellar neighbor is the Selish system, with Greater Roshar a bit further away.</p>
            <p class="paragraph_text">The local name of Nalthis' subastral is unknown. It's been speculated that it corresponds to what Rosharans name the Expanse of Vibrance, in which case it would directly neighbor Shadesmar. There are, in fact, regular caravans travelling between the two subastrals, carrying both goods and people. The Nalthian system is extremely popular with worldhoppers, to the point of there being a customs check in the vicinity of the local perpendicularity. This sole perpendicularity is located on Nalthis, in the jungles of the nation of Hallandren.</p>
        </div>`
        },
        'rosharan':{
            info: `<div class="info__main_data">
            <div class="main_data__logo_system"><img src="img/rosharan_logo.svg" alt=""></div>
            <h2 class="main_data__head_text">The Rosharan system</h2>
            <div class="main_data__space_line"></div>
            <p class="main_data__description_text">The Rosharan system, also known as Greater Roshar, is the name given to the planetary system containing the planet called Roshar. It comprises thirteen planets, three of which are inhabited, as well as the usual asteroid belt, and three moons for a total of sixteen orbital bodies -- an important number in the cosmere.</p>
            <div class="main_data__arrow"></div>
        </div>        
        <div class="info__secondary_data">
            <h3 class="head_text">Planets</h3>
            <p class="paragraph_text">The Greater Roshar system is composed of three terrestrial planets and ten gas giants, divided by the asteroid belt. In order from the sun, the terrestrial planets are:</p>
            <p class="paragraph_text"><span>Ashyn:</span> This is where The Silence Divine is set. While there are humans inhabiting this planet, a global cataclysm at some point in the past has forced most of its inhabitants to flee to Roshar, while the remainder lives in floating cities in the sky and in small areas of habitability. The cataclysm was likely caused by overuse of Surges by Ashynites, and has left the surface highly volcanically active. There is a known manifestation of Investiture on Ashyn, based around Surge-granting diseases, but no known Shard.</p>
            
            <p class="paragraph_text"><span>Roshar:</span> The second planet is the eponymous planet of Greater Roshar, and the primary setting of the Stormlight Archive. The Shards of Honor and Cultivation can be found here. Roshar features a single supercontinent, also called Roshar, on which its inhabitants live.</p>

            <p class="paragraph_text">Three moons, Salas, Nomon, and Mishim, orbit the planet in an unstable orbit.</p>

            <p class="paragraph_text">The majority of the Rosharan System's sentient lifeforms lives on Roshar.</p>

            <p class="paragraph_text"><span>Braize:</span> A cold planet, perhaps outside the habitable zone. While no humans live here, there do exist self-aware Splinters that inhabit either the planet or its Cognitive manifestation. Braize is where the Shard of Odium resides. In Rosharan mythology, Braize is referred to as Damnation, and is where Rosharan Heralds returned to between Desolations.</p>

            <p class="paragraph_text">The land is cold, barren, and inhospitable to all life; it is constantly swept by winds, implying that it does have an atmosphere.</p>

            <p class="paragraph_text"><span>Gas Giants:</span> Beyond the asteroid belt are ten gas giants. These outer planets, which are designated by Vorin numerals, are Jes, Nan, Chach, Vev, Palah, Shash, Betab, Kak, Tanat, and Ishi, in order of increasing distance from the sun.</p>

            <p class="paragraph_text">The existence of ten of these, and the relation it has to the importance of 10 to Honor and the Rosharan System, is currently unknown.</p>

            <p class="paragraph_text">The Rosharan gas giants have a minor presence on Shadesmar, which indicates that they are uninhabited. None of these planets have known moons or ring systems.</p>
        </div>
        <div class="info__secondary_data">
            <h3 class="head_text">Astronomy</h3>
            <p class="paragraph_text">In the greater Cosmere, the Rosharan system lies between Taldain, Scadrial, Nalthis and Sel, and is the closest to the latter. It is one of the stars in the Knight constellation. In the Cognitive Realm, Shadesmar is surrounded by four Expanses; the Expanse of the Vapors leads to Scadrial, the Expanse of the Densities leads to Sel, and the Expanse of Vibrance is believed to lead to Nalthis. It is currently unknown which planet the Expanse of the Broken Sky leads to.</p>
        </div>
        <div class="info__secondary_data">
            <h3 class="head_text">Inhabitants</h3>
            <p class="paragraph_text">The Rosharan system is inhabited by several sentient species. This includes humans on both Ashyn and Roshar; Singers, Siah Aimians and the Sleepless on Roshar; and a vast number of sentient spren. Braize also contains a large population of Cognitive Shadows of Singers, called the Fused, who migrate to Roshar during Desolations.</p>
            <p class="paragraph_text">It is likely that Roshar saw several waves of human immigration, as the Iriali may be later arrivals than other Rosharan humans.</p>
        </div>
        <div class="info__secondary_data">
            <h3 class="head_text">History</h3>
            <p class="paragraph_text">The Rosharan system was created prior to the Shattering, and was crafted directly by Adonalsium. The system was created for a specific purpose. The Rosharan spren Stormfather and the Singers likely predate it as well.</p>
            <p class="paragraph_text">After the Shattering, the Shards Honor and Cultivation settled on Roshar, becoming the gods of Singer people. Humans initially settled on Ashyn, but following the destruction of its environment, migrated to Roshar, and were granted the land that comprises modern Shinovar. The Shard Odium arrived on Roshar alongside them, and while the Singers believe it to be the human god, the exact relation is unclear. Honor trapped Odium in the system by unknown means, and the shard settled on Braize. However, when the relationship between humans and Singers deteriorated to the point of war, Odium took the Singers under his wing, creating the first Fused and starting the cycle of Desolations, periodic invasions of Roshar. During that time, Honor was killed by Odium, but his pact with Odium, along with the Oathpact that governs the Desolations, prevented Odium from leaving the system.</p>
            <p class="paragraph_text">Over the past 4.5 thousand years, the Rosharan system has enjoyed a period of relative stability, although this ended with the start of the True Desolation.</p>
        </div>
        <div class="info__secondary_data">
            <h3 class="head_text">Mythology</h3>
            <p class="paragraph_text">Several of the Rosharan system's celestial bodies have legends associated with them.</p>
            <p class="paragraph_text"><span>The planets:</span> Ashyn, though not known by that name to Roshar's inhabitants, is likely the Tranquiline Halls, the mythological homeworld of mankind in the Vorin creation myth. Rosharans believe that after death, they will fight to reclaim them from the Voidbringers, and that this is where the Heralds departed to following the Aharietiam. Braize, on the other hand, is a known name for Damnation, the place where, in Rosharan myths and legends, Voidbringers live. In Vorin cosmology, Damnation is the afterlife for particularly wicked souls.</p>
            <p class="paragraph_text"><span>The moons:</span> Many Rosharan cultures personify the three moons as semi-divine beings. In Shinovar, they are known as the Three Sisters, with Salas being the First Sister, Nomon the Second Sister, and Mishim the Third Sister. In Natanatan, Nomon is considered to be male.</p>
            <p class="paragraph_text">A particular myth from Natanatan concerns the latter two moons and the local queen, Tsa. In the story, Mishim (characterized as young and impulsive) wishes to experience human pleasures, and attempts to persuade Tsa to swap places with her. Tsa eventually relents, agreeing to take Mishim's place for one night. However, Mishim fails to return before dawn, and fears that Tsa will tell her older siblings about the ruse. The following night, she attempts to go back, only to find out that Tsa enjoys her time in the night sky too much to switch back. While Mishim manages to convince Tsa to return, nine months later the queen gives birth to a blue-skinned child. Mishim realizes that she's been conned, and Tsa wanted to visit the night sky all along, as she wished to lay with Nomon.</p>            
            <p class="paragraph_text">The legend serves as an explanation for the Natan people's unusual skin tone.</p>
        </div>`
        },
        'selish':{
            info: `<div class="info__main_data">
            <div class="main_data__logo_system"><img src="img/selish_logo.svg" alt=""></div>
            <h2 class="main_data__head_text">The Selish system</h2>
            <div class="main_data__space_line"></div>
            <p class="main_data__description_text">The Selish system is a planetary system in the cosmere. It is named after the second planet orbiting the star. The system contains four known planets in total and one unnamed dwarf planet on the edge of the system.</p>
            <div class="main_data__arrow"></div>
        </div>        
        <div class="info__secondary_data">
            <h3 class="head_text">Celestial Bodies</h3>
            <p class="paragraph_text"><span>Ashyn:</span> This is where The Silence Divine is set. While there are humans inhabiting this planet, a global cataclysm at some point in the past has forced most of its inhabitants to flee to Roshar, while the remainder lives in floating cities in the sky and in small areas of habitability. The cataclysm was likely caused by overuse of Surges by Ashynites, and has left the surface highly volcanically active. There is a known manifestation of Investiture on Ashyn, based around Surge-granting diseases, but no known Shard.</p>
            <p class="paragraph_text"><span>Mashe:</span> Mashe is the parent star in the Selish system. There are four planets and one dwarf planet orbiting Mashe. It also has an asteroid belt and a comet belt.</p>
            <p class="paragraph_text"><span>Donne:</span> The planet closest to Mashe. While within the system's habitable zone, the planet is barren, uncomfortably warm, and prone to terrible dust storms. Donne is also known as Doo.</p>
            <p class="paragraph_text"><span>Sel:</span> This is a planet containing the Shards of Devotion and Dominion. Sel has thriving human civilizations that have produced multiple empires and that make use of various manifestations of Investiture. The planet is also called Seol, perhaps from the Aon Seo meaning "loyalty" or "service". It has one moon, Oem. Beyond Sel lies an asteroid belt.</p>
            <p class="paragraph_text"><span>Ky:</span> Located after the asteroid belt, Ky appears to be a gas giant with four moons. It is also known is Kii, which is the Aon for "justice".</p>
            <p class="paragraph_text"><span>Ralen:</span> A gas giant with five moons and a ring system. Ralen appears to be the largest planet in the Selish system. It is also called Raa. A comet belt lies beyond Ralen.</p>
            <p class="paragraph_text"><span>Unnamed Dwarf Planet:</span> This small body lies just outside the Selish system's comet belt.</p>
        </div>`
        },
        'drominad':{
            info: `<div class="info__main_data">
            <div class="main_data__logo_system"><img src="img/drominad_logo.svg" alt=""></div>
            <h2 class="main_data__head_text">The Drominad system</h2>
            <div class="main_data__space_line"></div>
            <p class="main_data__description_text">The Drominad system is a planetary system in the cosmere that contains First of the Sun. "Drominad" is referred to as a nickname; the system's official name, if one exists, is unknown. It contains seven planets and an asteroid belt.</p>
            <div class="main_data__arrow"></div>
        </div>        
        <div class="info__secondary_data">
            <h3 class="head_text">Planets</h3>
            <p class="paragraph_text">There are four planets in the habitable zone of this system, all of which have water as the dominant feature on their surface. According to Khriss, three of them harbor "fully developed human societies," more than any other planetary system in the cosmere. In the star chart Guyn made to accompany Khriss' essay on the system, each of the system's seven planets are named using the number-based Eelakin naming convention:</p>
            <p class="paragraph_text"><span>First of the Sun:</span> The planet closest to the sun. This is also the first planet in the system's habitable zone, and it has human life. It has one moon named First of the First. It contains at least one large landmass known as the mainland and a large number of islands that are home to the Eelakin people. Patji, an avatar of Autonomy, resides on First of the Sun, and the planet is home to a perpendicularity known as Patji's Eye. Aviar are native to the planet's Pantheon. The presence of a perpendicularity in the system is of interest to cosmere scholars.</p>
            <p class="paragraph_text"><span>Second of the Sun:</span> This might be one of the three planets in the system which have a fully developed human societies living on it. Second of the Sun appears smaller than First of the Sun.</p>
            <p class="paragraph_text"><span>Third of the Sun:</span> Another planet which might be inhabited by human societies within this system. It appears to be the smallest planet in the Drominad system.</p>
            <p class="paragraph_text"><span>Fourth of the Sun:</span> This planet appears to have a ring system. It is the last planet in the Drominad system's habitable zone, and the last candidate which might harbor any fully developed human societies. Beyond the Fourth of the Sun lies an asteroid belt.</p>
            <p class="paragraph_text"><span>Fifth of the Sun</span> This gas giant is located after the asteroid belt. It has three moons and a ring system.</p>
            <p class="paragraph_text"><span>Sixth of the Sun</span> A gas giant with four moons and a ring system. Sixth of the Sun appears to be the largest planet in the Drominad system.</p>
            <p class="paragraph_text"><span>Seventh of the Sun</span> A gas giant with four moons.</p>
        </div>`
        },
        'taldain':{
            info: `<div class="info__main_data">
            <div class="main_data__logo_system"><img src="img/taldain_logo.svg" alt=""></div>
            <h2 class="main_data__head_text">The Taldain system</h2>
            <div class="main_data__space_line"></div>
            <p class="main_data__description_text">The Taldain system is the planetary system that contains Taldain, where White Sand takes place. It is a binary system consisting of one large star and a secondary smaller star. The smaller, a relatively dim white dwarf, is surrounded by a dense cloud of particles known as the Particulate Ring. The larger, a blue-white supergiant, plays an important role in the means by which Taldain is Invested by Autonomy. The positioning of the system was intentionally designed by someone, presumably Autonomy.</p>
            <div class="main_data__arrow"></div>
        </div>        
        <div class="info__secondary_data">
            <h3 class="head_text">Planets</h3>
            <p class="paragraph_text"><span>Taldain:</span> Taldain is the sole planet inhabiting the Taldain system. It is tidally locked and located at a Lagrange point[3] such that Dayside always faces the larger star while Darkside always faces the smaller, weak star, which is obscured by the Particulate Ring. A single moon, Nizh Da, is in a polar orbit around the planet.</p>
        </div>`
        },
        'threnodite':{
            info: `<div class="info__main_data">
            <div class="main_data__logo_system"><img src="img/threnodite_logo.svg" alt=""></div>
            <h2 class="main_data__head_text">The Threnodite system</h2>
            <div class="main_data__space_line"></div>
            <p class="main_data__description_text">The Threnodite system is the planetary system that contains Threnody, where Shadows for Silence in the Forests of Hell takes place. Though none of the planets in the system have Shards residing on them, the Shards Ambition, Mercy, and Odium fought in the empty space of the system. It is unclear which side Mercy supported, though it seems likely that they were allied to Ambition, since Harmony reached out to them for help against Odium. Ambition was mortally wounded as a result of this clash, and this calamity is at least a partial cause of the twisted forms of Investiture on Threnody. The system contains four planets, one of which has a moon. It is significant that most of the celestial bodies in the system are named after songs of mourning.</p>
            <div class="main_data__arrow"></div>
        </div>        
        <div class="info__secondary_data">
            <h3 class="head_text">Planets</h3>
            <p class="paragraph_text">There are four planets in this system. Three of the four planets, as well as the sole moon, are named after different types of songs of mourning:</p>
            <p class="paragraph_text"><span>Monody:</span>
            The planet closest to the sun.</p>
            <p class="paragraph_text"><span>Elegy:</span>
            This is the second planet from the sun, possessing a moon called Coronach.</p>
            <p class="paragraph_text"><span>Threnody:</span>
            The third planet from the sun, where Shadows for Silence in the Forests of Hell takes place. This planet has people on it, as well as a strong ambient Investiture presence in the form of the shades that populate the Forests found on one of the two continents. Threnody has no moon.</p>
            <p class="paragraph_text"><span>Purity:</span>
            This planet is the furthest out in the system, and is much farther from the other three planets than they are from each other. It is also much larger than the other three planets, which are similar in size to each other. The exclamation "Purity's Eye," used by Nazh, likely derives from this planet.</p>
        </div>`
        }
    }
    const constellations = [
      'dragon', 'drominad', 'rosharan', 'scadrian_nalthian', 'selish', 'taldain', 'threnodite'
    ]
    const systems = [
      'drominad', 'rosharan', 'scadrian', 'nalthian', 'selish', 'taldain', 'threnodite'
    ]

    function pantallaCompleta() {
      //Si el navegador es Mozilla Firefox 
      if(document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen(); 
      }
      //Si el navegador es Google Chrome
      else if(document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen();
      }
      //Si el navegador es otro else
      if(document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      }
    }
    function pantallaNormal() {
      //Mozilla Firefox
      if(document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
      }
      //Google Chrome
      else if(document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
      }
      //Otro
      else if(document.cancelFullScreen) {
          document.cancelFullScreen();
      }
    }
    function cerrarCajaInfo(){
        main.removeClass('main--zoom-in');
        //info.scrollTop(0);
        info.animate({scrollTop: 0}, 1000);
        info.removeClass('info--on');
    }


    $('#btn_start').click(function(){
      pantallaCompleta();
      $('#intro').children('.content').hide();
      $('#intro').addClass('show_section');
    });
    $('#btn_cfullscreen').click(function(){
      if($('#btn_cfullscreen').hasClass('cfull--open')){
          pantallaCompleta()
      }else{
          pantallaNormal();
      }
      $('#btn_cfullscreen').toggleClass('cfull--open');
      
    })

    $('.system .system__sun_content .sun').click(function(){
        let screenW = $(window).width();
        let screenH = $(window).height();
        screenW > screenH ? vmax = screenW * 0.005 : vmax = screenH * 0.005;
        let thisSystem = $(this).parent().parent().children('.system__content');
        let thisIDSystem = $(this).parent().parent()[0].id;
        

        let systemX = thisSystem.attr('data-systemx');
        let systemY = thisSystem.attr('data-systemy');

        systemX < 0 ? systemX /= (-1) : systemX *= (-1);
        systemY < 0 ? systemY /= (-1) : systemY *= (-1);
        let position = thisSystem.offset();
        let systemW = thisSystem.width();
        let systemH = thisSystem.height();

        main.addClass('main--zoom-in');
        info.addClass('info--on');
      
        main.css({ //font-size: .5vmax;        
            "transform-origin": ((position.left + (systemW / 2)) / vmax) + "rem " + ((position.top + (systemH / 2) ) / vmax) + "rem"
        });
        /* main.css({ //font-size: 10px;                   
            "transform-origin": (position.left / 10) + "rem " + (position.top / 10) + "rem"
        }); */

        animationBox.empty().append(
        '.main--zoom-in{'+
            'translate: calc(' + (systemX / 10) + 'rem - 25%) ' + (systemY / 10) + 'rem;'+
            'scale: 4;'+
        '}'+
        '.main--zoom-in #'+thisIDSystem+'{'+
            'opacity: 1;'+
            'display: flex;'+
            'pointer-events: initial;'+
        '}');

        info.empty().append(`<div class="info_content">${dadaSystem[thisIDSystem]['info']}</div>`);
        info.append('<div class="info_btn--close"></div>');

    });

    $('.system__sun_content .sun').hover(
      function(){//enter
        $(this).parents('.system').find('.system__content .system__sun').addClass('system__sun--hover');
      },
      function(){//leaves
        $(this).parents('.system').find('.system__content .system__sun').removeClass('system__sun--hover');
      }
    );

    $('body').on('click', '.system .system__rings_content .system__sun', function(){
      cerrarCajaInfo();
    });
    $('body').on('click', '.info_btn--close', function(){
      cerrarCajaInfo();
    });

    $('.system__planet_content').hover(
      function(){//enter
        thisIdHover = $(this).parent().parent().parent()[0].id;

        $('#'+thisIdHover+' .system__rings_content > .system__ring_content').css('opacity', '.2');
        $(this).parent().removeAttr('style');
      },
      function(){//leaves
        $('#'+thisIdHover+' .system__ring_content').removeAttr('style');
      }
    );


    function cargarConstelaciones(constellations){
      constellations.forEach(constellation => {
        fetch(`./img/constellations/constellation-${constellation}.svg`)
        .then(response => response.text())
        .then(data => {
          $(`.constellation-${constellation}`).append(data);
        })
        .catch(error => {
          console.error('Error fetching constellation SVG:', error);
        });
      });
      
    }
    function cargarSistemas(systems){
      systems.forEach(system => {
        fetch(`./img/systems/${system}_system.svg`)
        .then(response => response.text())
        .then(data => {
          $(`#${system} .system__content`).append(data);
        })
        .catch(error => {
          console.error('Error fetching constellation SVG:', error);
        });
      });
      
    }
    cargarConstelaciones(constellations);
    cargarSistemas(systems);


    $('#btn_quit').click(function(){
      window.close();
    })
    
});
