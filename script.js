let data = [43, 55, 29, 70, 95, 60, 85];
const chartContainer = document.getElementById('chart-container');

let htmlBars = [];
function createChart(){
      for (let i = 0; i < data.length; i++) {

    const barElement = document.createElement('div');

     barElement.classList.add('bar');
      chartContainer.appendChild(barElement);

      htmlBars.push(barElement);
} 
  updateChartVisuals();
}

 function updateChartVisuals() {

            const maxScale = 100; 
  for (let i = 0; i < data.length; i++) {

                const currentValue = data[i];
                      const heightPercentage = (currentValue / maxScale) * 100;
     htmlBars[i].style.height = heightPercentage + '%';
         htmlBars[i].innerText = currentValue;
  }
}


async function fetchApiData() {
            const btn = document.getElementById('fetch');
 try {
         const response = await fetch('https://www.random.org/integers/?num=7&min=10&max=100&col=1&base=10&format=plain&rnd=new');
                
      if (!response.ok) {
                    throw new Error("API request failed");
      }
                
                const textData = await response.text();
                  const fetchedNumbers = textData.trim().split('\n');
                
                for (let i = 0; i < data.length; i++) {
                    data[i] = parseInt(fetchedNumbers[i], 10);
 }
                
    updateChartVisuals();

    } catch (error) {
                console.error("API Error:", error);
     alert("Could not fetch data from the API.");
     } finally {
                btn.innerText = "Fetch Data";
                btn.disabled = false;
               }
        }

function sortData() {
    data.sort(function(a, b) {
     return a - b; 
            });
            
        
            updateChartVisuals();
        }

        createChart();
