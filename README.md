# Team_One_Final_Project
## Indroduction 
We aim to develop a predictive model to identify individuals at risk of developing Alzheimer’s Disease (AD) based on a variety of demographic, medical, and behavioral indicators. By leveraging existing datasets containing features such as age, gender, medical history, cognitive assessments, and other biomarkers, we seek to build a model capable of forecasting the likelihood of AD development. Our goal is to achieve an accuracy threshold of 75%, which will serve as a benchmark for the model's effectiveness in making reliable predictions.
## Research Questions
1. The likelihood an individual may develop Alzheimer’s disease based on demographics?

## Dataset Overview
   Neural Network Model Testing:
For the first neural network tests, three models were created to process the data. All three had the same structure: 4 hidden layers with 160 nodes on Layer 1, 80 nodes on Layer 2, 40 Nodes on Layer 3, and 20 Nodes on Layer 4.
For columns included, the first two neural networks dropped the identifying data: "_id", "PatientID", and "DoctorInCharge". The first neural network had sigmoid activation on each layer of the neural network, and achieved an 86.99% accuracy. The second neural network had relu activation on all layers except the final layer (sigmoid being necessary here for a binary output), and achieved an 81.97% accuracy.
The third neural network was created to see what the impact would be if the symptoms were removed, so that the model could also be used for those without observed symptoms. The third neural network removed columns "_id", "PatientID", "DoctorInCharge", "Confusion", "Disorientation", "PersonalityChanges", "DifficultyCompetingTasks", and "Forgetfulness". Since the all-sigmoid neural network performed better than the all-relu neural network, the activations for the third network were all sigmoid. The third model achieved an accuracy of 85.6%.
