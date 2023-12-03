document.addEventListener('DOMContentLoaded', function () {
    // Your chart rendering logic goes here
    var ctx = document.getElementById('barChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            // Your chart data here
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [{
                label: 'Number of events',
                data: [30, 40, 20, 60, 45, 35, 25],
                backgroundColor: ['#888', '#888', '#888', '#fff', '#888', '#888', '#888'],
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
