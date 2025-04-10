# Team_One_Final_Project
## Introduction 
We aim to develop a predictive model to identify individuals at risk of developing Alzheimer’s Disease (AD) based on a variety of demographic, medical, and behavioral indicators. By leveraging existing datasets containing features such as age, gender, medical history, cognitive assessments, and other biomarkers, we seek to build a model capable of forecasting the likelihood of AD development. Our goal is to achieve an accuracy threshold of 75%, which will serve as a benchmark for the model's effectiveness in making reliable predictions.
## Research Questions
1. The likelihood an individual may develop Alzheimer’s disease based on demographics?

## Data Source 
- Data was retrived from Kaggle: https://www.kaggle.com/datasets/rabieelkharoua/alzheimers-disease-dataset , https://www.kaggle.com/code/edumisvieramartin/alzheimers-prediction-neural-networks
- Imported into MongoDB
- code to connect to environment in googe colab
- !pip install -q pymongo pandas
from pymongo import MongoClient  
uri = "mongodb+srv://group_1:1234567890@cluster0.0kxynkc.mongodb.net/"
client = MongoClient(uri)  
db = client["final_project"]

## Dataset Overview
This visualization structure effectively captures the demographic dimensions of Alzheimer's diagnoses across multiple variables, which provides a solid foundation for identifying at-risk populations and potential patterns in the data before moving to predictive modeling.
https://public.tableau.com/app/profile/sunil.williams/viz/ALZbreakdownv2/Dashboard12

## Model Overview

**Neural Network Model Testing:**
For the first neural network tests, three models were created to process the data. All three had the same structure: 4 hidden layers with 160 nodes on Layer 1, 80 nodes on Layer 2, 40 Nodes on Layer 3, and 20 Nodes on Layer 4.
For columns included, the first two neural networks dropped the identifying data: "_id", "PatientID", and "DoctorInCharge". The first neural network had sigmoid activation on each layer of the neural network, and achieved an 86.99% accuracy. The second neural network had relu activation on all layers except the final layer (sigmoid being necessary here for a binary output), and achieved an 81.97% accuracy.
The third neural network was created to see what the impact would be if the symptoms were removed, so that the model could also be used for those without observed symptoms. The third neural network removed columns "_id", "PatientID", "DoctorInCharge", "Confusion", "Disorientation", "PersonalityChanges", "DifficultyCompetingTasks", and "Forgetfulness". Since the all-sigmoid neural network performed better than the all-relu neural network, the activations for the third network were all sigmoid. The third model achieved an accuracy of 85.6%.
  
  **Contributors:** Molly Pfefferkorn, Jim Cruz, Curtis McMullen, Grecia Lopez

**Logistic Regression Model:**
For the Logistic regression model,the initial dataset was plotted using hv plot to determine any unwanted columns. From this, we were able to drop the "_id", "PatientID", and "DoctorInCharge" columns to create a new data frame for further analysis. The new dataset was then split using train, test, split and all features were standardized using StandardScaler. A logistic regression model was trained on the scaled training data and evaluated on both the training and testing sets. These were the results for further evaluation... 
  __Training Score:__ 85%
  __Testing Score:__ 84%
  __Accuracy Score:__ 84%
  __Confusion Matrix:__ array([[306,  42],
                         [ 46, 144]])

  __Classification Report:__
  
                 precision    recall  f1-score   support

           0       0.87      0.88      0.87       348
           1       0.77      0.76      0.77       190

    accuracy                           0.84       538
   macro avg       0.82      0.82      0.82       538
weighted avg       0.84      0.84      0.84       538

__Note on PCA:__
Principal Component Analysis (PCA) was applied to reduce dimensionality and visualize the distribution of the two diagnosis classes in a separate colab file that otherwise followed the same steps as above. The goal was to check for clear visual separation between patients with and without Alzheimer's. However, the PCA-based scatter plot showed significant overlap between classes with no distinct clusters, and model accuracy dropped by ~10%. As a result, PCA was not used in the final model to maintain predictive performance.

 **Contributors:** Rumani Kafle, Lorelei Legg

**Random Forest Classifier:**
A Random Forest classifier is a machine learning algorithm that uses an ensemble of decision trees to make predictions, combining the predictions of multiple trees to improve accuracy and reduce overfitting. 
We initially dropped the following columns: “_id”, “DoctorInCharge”, “PatientID”, “BMI”, and “Gender”. 
We also experimented with removal of Medical History factors and demographic details, however none had a positive effect when removed except Gender.
We experimented with the number of estimators used in the modeling to increase the accuracy but found that above an estimator number of 200, there was little to no significant increase in the accuracy.
The model was executed with various iterations in order to check the  accuracy and we able to come up with 3 different results:
90%, 91%, 93.1% (final and highest)
 
 **Contributors:** Chris Lane, Alison Driscoll, William Fetter, Atnaf Ayalew
 
**Optimization Study using Keras Tuner with the Hyperband algorithm**
Our automated hyperparameter search successfully identified the optimal neural network architecture for this disease prediction task. The Hyperband algorithm efficiently explored the hyperparameter space to discover the following configuration:

Optimal Architecture
-Activation Function: ReLU
-Network Depth: 5 hidden layers
-Neuron Distribution:

-First layer: 80 neurons
-Second layer: 32 neurons
-Third layer: 80 neurons
-Fourth layer: 80 neurons
-Fifth layer: 96 neurons

Performance Metrics
-Validation Accuracy: 84.59%
-Test Accuracy: 82.33%

These results demonstrate that our model can effectively identify patterns in this limited dataset, achieving strong predictive performance for the target disease. The consistent performance between validation and test sets suggests good generalization capabilities despite the dataset constraints.
 **Contributors:** Jan Lelie


