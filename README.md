# MW_PVL2324
# How to get this running?
- clone repository 
- switch into the root directory of cloned repo (where docker-compose.yml is present -> MW_PVL2324)
- start database, backend and frontent with "docker-compose up"

# What is the application doing?
-Very simple application to add, edit, delete and look at tasks(that got created) 

# Explanation of the Frontent/UI
![UI](https://github.com/DejanHFT/MW_PVL2324/assets/133747317/15f007e1-b9eb-41e8-9b51-bdbbed42a37b)
- This is the view you see when opening localhost:3000 for the first time
- -> A form to add further tasks
- -> Below already added tasks can be seen 
- -> Clicking delete next to a task deletes the corresponding task
- -> Clicking Edit leads us to this form here: 
![UI-Edit](https://github.com/DejanHFT/MW_PVL2324/assets/133747317/006a16b8-b9ff-4dfb-b451-dac3dece4977)
- -> user can see the details of the task and the form above can be adjusted as wanted
- -> the new values then override the existing tasks old values: 
![UI-Edited](https://github.com/DejanHFT/MW_PVL2324/assets/133747317/e3ebdd33-dea9-4686-8d99-f880d952fe12)
- -> Same task but now with new values 

- UI is not really pretty and intuitive - sorry for that - hopefully the "tutorial" can help you out a little bit

# Further impressions/screenshots of my project 
![Docker_Desktop](https://github.com/DejanHFT/MW_PVL2324/assets/133747317/3b1ed5f6-18d7-47f8-9ec0-802ac3c8fc65)
- Docker Desktop view

![cmd_1](https://github.com/DejanHFT/MW_PVL2324/assets/133747317/ac9b3cc1-2f89-4d12-8ab9-2c963f021e93)
![cmd_2](https://github.com/DejanHFT/MW_PVL2324/assets/133747317/4bb8aaa1-f78d-4e04-861d-5915c494f2bf)
- Console output after freshly pulling the repo and using the "docker-compose up" command

![UI_DEMO](https://github.com/DejanHFT/MW_PVL2324/assets/133747317/f51da13d-a441-4f52-8e97-72fe5d2c6f97)
![accessing_8080](https://github.com/DejanHFT/MW_PVL2324/assets/133747317/4f4dc980-dd1b-4b3b-b048-c56e790e2ff9)
-how changes on the frontent get reflected in the backend/on localhost:8080
