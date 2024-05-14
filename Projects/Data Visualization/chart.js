// var ctx = document.getElementById("bar-chart").getContext("2d")
// ctx.width = 100;
// ctx.height = 50;

new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["Business", "Health", "Social Science", "Engineering", "Biology", "Psychology", "Computer Science", "Visual Arts", "Communication", "Education"],
      datasets: [
        {
          label: "Victor Noel",
          backgroundColor: ["blue", "red","yellow","lightblue","green","purple","grey","pink","orange","brown"],
          data: [387851, 257282, 161164, 128332, 126590, 119968, 97047, 92332, 91752, 85057]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Top Majors in the U.S (2023)'
      }
    }
});

new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
        labels: ["Business", "Health", "Social Science", "Engineering", "Biology", "Psychology", "Computer Science", "Visual Arts", "Communication", "Education"],
        datasets: [
          {
            label: "Victor Noel",
            backgroundColor: ["blue", "red","yellow","lightblue","green","purple","grey","pink","orange","brown"],
            data: [387851, 257282, 161164, 128332, 126590, 119968, 97047, 92332, 91752, 85057]
          }
        ]
      },
    options: {
      title: {
        display: true,
        text: 'Top Majors In the U.S (2023)'
      }
    }
});