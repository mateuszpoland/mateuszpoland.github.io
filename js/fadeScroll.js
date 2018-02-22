$(document).ready(function() {
                
                // wkładam do zmiennych - cały dokument i elementy z klasą ''fade-scroll", które mają byćprzyciemnione 
                var documentEl = $(document),
                    fadeElem = $('.fadeScroll');
                
                //na całym dokumencie, zareaguj na wydarzenie 'scroll' funkcją
                documentEl.on('scroll', function() {
                	//.scrollTop() pobiera aktualną pozycję pionową scrolla - równa jest ilości pixeli, o które scroll jest oddalony od górnej krawedzi
                    var currScrollPos = documentEl.scrollTop();
                    
                    //dla kazdego elementu z klasą "fade-scroll" wykonaj:
                    fadeElem.each(function() {
                    	//zapisz ten element jako zmienna, zeby mozna bylo na nim wykonywac funkcje
                        var $this = $(this),
                        //funkcja .offset().top - zwraca aktualne koordynaty pierwszego napotkanego elementu należącego do danej klasy, relatywnie do dokumentu - w tym wypadku od top - od góry dokumentu
                            elemOffsetTop = $this.offset().top;
                           //jeżeli przewinę scroll poniżej odległości danego elementu od góry strony, to dodaj property css w sposób liniowy zgodny z ponizsym równaniem
                        if (currScrollPos > elemOffsetTop) $this.css('opacity', 1 - (currScrollPos-elemOffsetTop)/1000);
                    }); 
                });
                
            });