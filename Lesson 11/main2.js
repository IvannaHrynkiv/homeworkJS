const recipesDiv = document.getElementById('recipes');
fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(menuObject => {
        const {recipes} = menuObject;
        console.log(recipes);

        for (const menu of recipes){
            const div = document.createElement('div');
            div.classList.add('menu-container');
            const divWithInfo = document.createElement('div');
            divWithInfo.innerText = `"instructions": ${menu.instructions},
              "ingredients": ${menu.ingredients}`
            div.appendChild(divWithInfo);
            recipesDiv.appendChild(div);
        }
    })