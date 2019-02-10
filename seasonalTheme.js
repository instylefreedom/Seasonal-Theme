let currSeasonTheme = '';// bc season will be updated

const seasonalThemes = {
    'winter': {
        images: {
            headerURL: 'seasons/winter.gif',
        }
    }, 
    'fall': {
        images: {
            headerURL: 'seasons/fall.gif',
        }
    },
    'summer': {
        images: {
            headerURL: 'seasons/summer.gif',
        }
    },
    'spring': {
        images: {
            headerURL: 'seasons/spring.gif',
        }
    }
};

function checkTimeOfYear() {
    /*
    Winter solstice 2019 in Northern Hemisphere will be at 11:19 PM on
Saturday, December 21
All times are in Eastern Time.
    */
   /*
    Spring 2019 in Northern Hemisphere will begin on
Wednesday, March 20
and ends on
Friday, June 21
All dates are in Eastern Time.
   */
  /*
    Summer solstice 2019 in Northern Hemisphere will be at 11:54 AM on
Friday, June 21
All times are in Eastern Time.
  */
    /*
    Autumn 2019 in Northern Hemisphere will begin on
Monday, September 23
and ends on
Saturday, December 21
All dates are in Eastern Time.
    */
    let date = new Date();
    let hour = date.getHours()
    let minute = date.getMinutes();
    let month = date.getMonth();
    let day = date.getDate();  // get day of month (1-31) of specified date according to local time according to MDN
    if (month < 3) {
        setSeasonalTheme('winter');
        document.documentElement.style.setProperty('--season', 'seasons/winter.gif');
    }
}

function setSeasonalTheme(season) {
    if (currSeasonTheme === season) {
        return; // upon periodical update attempts, if no need for season update, simply return
    }
    currSeasonTheme = season;
    browser.theme.update(seasonalThemes[season]);
}

// when user applies extension upon new browser session
checkTimeOfYear();

//periodical updates using alarms api
browser.alarms.onAlarm.addListener(checkTimeOfYear);
browser.alarms.create('checkTimeOfYear', {periodInMonths: 3});
