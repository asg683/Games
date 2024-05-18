$(function() {

	$('.nav').hide().delay(500).fadeIn(1000);


	$('.links').eq(0).click(function(event) {
        event.preventDefault(); 
        $('.mainContent').empty();
        let $about = '<h1 style="color: darkred; text-align : center;">Horror story...</h1><p>A man just moved into an apartment and heads to the receptionist to get his keys. The receptionist gave him the key with a smile but warns him not to disturb the door with no number on his floor. He wondered why but didn’t bother to ask, he was too busy with his new apartment to care. After he finished unpacking he began to get curious. He questioned why the receptionist would warn him of such things, and so he stepped out of his apartment to check the door with no number. He tried the door knob first but it was locked, so instead he got onto his knees and peeked through the keyhole. The apartment he was looking into was empty. His eyes scanned the whole place before stopping at a woman, standing face against a wall, in the corner. He noticed her pale skin and long black hair before stepping back, suddenly feeling perverted in a way for invading someone else’s privacy. He brushed it off, assuming she was someone that did not want to be disturbed. The next day he got more curious about the woman and eventually went back, straight away getting onto his knees. He peeked through the keyhole and saw all red. Red. He assumed that the pale woman must have caught him peeking the last time and covered the hole with something red. He left the door alone and instead went down to the receptionist to ask her questions. The receptionist sighed and asked, “you looked through the keyhole, didn’t you?” He admitted to it and so she felt obliged to tell him the story. She told him that a couple used to live in that apartment a long time ago, but the husband went crazy and killed his wife. However, this couple wasn’t normal. They had pale skin, black hair and red eyes.</p><a href="https://dyatmika.org/students/my-favourite-short-scary-stories/">Source</a>';
        $('.mainContent').html($about);
    });


	$('.links').eq(1).click(function() {
	    $('.links').removeClass('selected');
	    $(this).addClass('selected');
	    $('.mainContent').empty();
	    let $video = '<iframe width="560" height="315" src="https://www.youtube.com/embed/qLthN5Hs-bg?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
	    $('.mainContent').html($video);
	});

	

	$('.links').eq(2).click(function() {
		$('.links').removeClass('selected');
        $(this).addClass('selected');
        $('.mainContent').empty();
        let $horrorphoto = $('<img src="1.jpeg" border="2">');
        $('.mainContent').html($horrorphoto);

        $horrorphoto.hide().appendTo('.mainContent').fadeIn(1000).animate({}, 1000);
    
    	function bigger() {
	        let currentWidth = $horrorphoto.width();
	        let currentHeight = $horrorphoto.height();
	        $horrorphoto.animate({
	            width: currentWidth + 10,
	            height: currentHeight + 10
	        }, 100);
	    }
	    bigger();
	    setInterval(function() {
	        bigger();
	    }, 100); 

    });

    $('.mainContent').on('click', 'img', function() {
        $(this).fadeOut(2000, function() {
            $(this).remove();
        });
    });


	$('.links').eq(3).click(function() {
	    $('.links').removeClass('selected');
	    $(this).addClass('selected');
	    $('.mainContent').empty();
	    
	    let differentTags = [
	        {
	            name: 'THE WHITE HORSE TAVERN',
	            hoverText: ': Historically a favorite haunt of writers, the White Horse Tavern opened its doors in 1880 and welcomed such famous authors, poets and musicians as Jack Kerouac, Allen Ginsberg, Dylan Thomas, Norman Mailer, Bob Dylan and Jim Morrison. The self-proclaimed second-oldest continuously run tavern in the city is perhaps most famous because the 39-year-old Dylan Thomas claimed to have downed 18 straight whiskey shots there before his demise in late 1953. His ghost is said to hang about the tavern from time to time. At the very least, patrons can see his photo gracing the walls while they enjoy a bite and a beverage.'
	        },
	        {
	            name: 'INDOOR GHOST WALK: THE GHOSTS OF GRAND CENTRAL',
	            hoverText: ': This well-rated tour by the Ghosts of New York Group explores indoor hauntings of the NYC transit system. Book a haunted New York tour for some hair-raising stories — or at least a unique beginning to a fall night out in New York. You’ll never pass through Grand Central Terminal again without thinking about the past and all that has occurred since the station opened in 1913.'
	        },
	        {
	            name: 'THE CAMPBELL APARTMENT',
	            hoverText: ': This lush cocktail bar in Grand Central Terminal is said to be patronized by an otherworldly and well-dressed older couple sharing drinks and a moment together in the upstairs balcony, even when the bar is closed. Have a drink with friends, and then wander down to the terminal after closing time, keeping your eyes on the seats near the edge of the balcony. The Campbell Apartment is a great refreshment stop along the way as you tour Archer’s 7 Most Haunted Places in New York.'
	        }
	    ];

	    let $differentPtags = $('<div></div>');

	    differentTags.forEach(function(tag) {
	        let $tag = $('<p>' + tag.name + '</p>');
	        $tag.hover(
	            function() {
	                $(this).css({
	                    'background-color': 'black',
	                    'opacity': 0.5
	                });
	                $(this).append('<span class="hover-text">' + tag.hoverText + '</span>');
	            },
	            function() {
	                $(this).css({
	                    'background-color': '',
	                    'opacity': ''
	                });
	                $(this).find('.hover-text').remove();
	            }
	        );
	        $differentPtags.append($tag);
	    });

	    $('.mainContent').html($differentPtags);
	});


	
});