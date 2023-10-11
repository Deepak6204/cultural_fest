$(document).ready(function() {
    let targetDate = new Date('2023-10-14T23:59:59Z').getTime();

    function updateTimer() {
        let now = new Date().getTime();
        let timeDifference = targetDate - now;

        if (timeDifference <= 0) {
            clearInterval(interval);
            $('#timer').html('<span>00</span>:<span>00</span>:<span>00</span>:<span>00</span>');
            return;
        }

        let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        $('#days').text((String(days).padStart(2, '0'))+" : ");
        $('#hours').text((String(hours).padStart(2, '0'))+" : ");
        $('#minutes').text((String(minutes).padStart(2, '0'))+" : ");
        $('#seconds').text(String(seconds).padStart(2, '0'));
    }

    updateTimer(); // Call the function immediately

    const interval = setInterval(updateTimer, 1000); // Update every second
});
