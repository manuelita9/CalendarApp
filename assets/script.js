var refreshBtn = $(`.refresh`)
var saveBtn = $(`.saveBtn`);
var currentDay = moment().format('dddd MMMM Do YYYY')


$(`#currentDay`).text(currentDay);

function colorCode() {
    var hour = moment().hours(); 

    $(`.time-block`).each(function() {
        var currHour = parseInt($(this).attr(`id`)); 

        if (currHour > hour) {
            $(this).addClass(`future`);
        }
        
        else if (currHour === hour) {
            $(this).addClass(`present`);
        } 
        else {
            $(this).addClass(`past`);
        }
    })
};

refreshBtn.on(`click`, function() {
    localStorage.clear()
    window.location.reload()}
    )

saveBtn.on(`click`, function() {

    var time = $(this).siblings(`.hour`).text();
    var plan = $(this).siblings(`.plan`).val();
   

    localStorage.setItem(time, plan);
});


function init() {

    $(`.hour`).each( 
        function() {
        var currHour = $(this).text();
        var currPlan = localStorage.getItem(currHour);
        if(currPlan !== null) {
            $(this).siblings(`.plan`).val(currPlan);
        }
    }
    )
}


colorCode();
init();