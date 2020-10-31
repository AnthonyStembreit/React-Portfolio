    
    function Card(showBtn, hideBtn, description, cardBody){
    this.show = showBtn
    this.hide = hideBtn
    this.description = description
    this.card = cardBody
    }
    Card.prototype.openDescription = function (){
        console.log(this.description)
        let descriptionBody = document.querySelector(this.description)
        let show = document.querySelector(this.show)
        (show).addEventListener("click", function(){
            descriptionBody.setAttribute("style", "height:100%")
        })
    }
    Card.prototype.closeDescription = function (){
        let descriptionBody = document.querySelector(this.description)
        let hide = document.querySelector(this.hide)
        hide.addEventListener("click", function(){
            descriptionBody.setAttribute("style", "height:0")
        })
    }
  
   
    let cocktail = new Card("#cocktail_coterieopen", "#cocktail_coterieclose", "#cocktail_coteriedescription", "#cocktail_coterie")
    cocktail.openDescription()
    cocktail.closeDescription()
  
    
    let exploration = new Card("#2open", "#2close", "#2overlay", "#2")
    exploration.openDescription()
    exploration.closeDescription()
  
    
    let tracking = new Card("#openTracking", "#closeTracking", "#trackingDescription", "#tracking-body")
    tracking.openDescription()
    tracking.closeDescription()
 
    
    let weather = new Card("#openWeather", "#closeWeather", "#weatherDescription", "#weather-body")
    weather.openDescription()
    weather.closeDescription()
   
    
    let readme = new Card("#openReadme", "#closeReadme", "#readmeDescription", "#readme-body")
    readme.openDescription()
    readme.closeDescription()

    
    let burger = new Card("#openBurger", "#closeBurger", "#burgerDescription", "#burger-body")
    burger.openDescription()
    burger.closeDescription()
  
    
    