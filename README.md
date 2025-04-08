# Team_One_Final_Project
## Indroduction 
We aim to develop a predictive model to identify individuals at risk of developing Alzheimer’s Disease (AD) based on a variety of demographic, medical, and behavioral indicators. By leveraging existing datasets containing features such as age, gender, medical history, cognitive assessments, and other biomarkers, we seek to build a model capable of forecasting the likelihood of AD development. Our goal is to achieve an accuracy threshold of 75%, which will serve as a benchmark for the model's effectiveness in making reliable predictions.
## Research Questions
1. The likelihood an individual may develop Alzheimer’s disease based on demographics?

## Dataset Overview
**Neural Network Model Testing:**
For the first neural network tests, three models were created to process the data. All three had the same structure: 4 hidden layers with 160 nodes on Layer 1, 80 nodes on Layer 2, 40 Nodes on Layer 3, and 20 Nodes on Layer 4.
For columns included, the first two neural networks dropped the identifying data: "_id", "PatientID", and "DoctorInCharge". The first neural network had sigmoid activation on each layer of the neural network, and achieved an 86.99% accuracy. The second neural network had relu activation on all layers except the final layer (sigmoid being necessary here for a binary output), and achieved an 81.97% accuracy.
The third neural network was created to see what the impact would be if the symptoms were removed, so that the model could also be used for those without observed symptoms. The third neural network removed columns "_id", "PatientID", "DoctorInCharge", "Confusion", "Disorientation", "PersonalityChanges", "DifficultyCompetingTasks", and "Forgetfulness". Since the all-sigmoid neural network performed better than the all-relu neural network, the activations for the third network were all sigmoid. The third model achieved an accuracy of 85.6%.
  **Contributors:** Molly Pfefferkorn, Jan Lelie, Jim Cruz, Curtis McMullen, Grecia Lopez

**Logistic Regression Model:**
For the Logistic regression model, the data set was plotted using hv plot and we dropped the "_id", "PatientID", and "DoctorInCharge" and created a new data frame. Then we used .valuecount() to see the counts for the "Diagnosis". The data was then split using train, test, split. Then we scaled the data using standardscaler. We then made the logistic Regression model. The model was then scored against the training data. When the model was ran with the testing data model it received a Testing Score: 0.81. We then showed the predicted data vx. the actual data. The model had an 81.23% accuracy.  The following is the logistic regression model's classification report.
                  precision    recall  f1-score   support

           0       0.83      0.89      0.86       348
           1       0.77      0.67      0.72       190

    accuracy                           0.81       538
   macro avg       0.80      0.78      0.79       538
weighted avg       0.81      0.81      0.81       538
 **Contributors:** Rumani Kafle, lorelei Legg

**Random Forest Classifier:**
A Random Forest classifier is a machine learning algorithm that uses an ensemble of decision trees to make predictions, combining the predictions of multiple trees to improve accuracy and reduce overfitting. 
We initially dropped the following columns: “_id”, “DoctorInCharge”, “PatientID”, “BMI”, and “Gender”. 
We also experimented with removal of Medical History factors and demographic details, however none had a positive effect when removed except Gender.
We experimented with the number of estimators used in the modeling to increase the accuracy but found that above an estimator number of 200, there was little to no significant increase in the accuracy.
The model was executed with various iterations in order to check the  accuracy and we able to come up with 3 different results:
90%, 91%, 93.1% (final and highest)
 **Contributors:** Chris Lane, Alison Driscoll, William Fetter, Atnaf Ayalew


## Data Source 
- Data was retrived from Kaggle: https://www.kaggle.com/datasets/rabieelkharoua/alzheimers-disease-dataset , https://www.kaggle.com/code/edumisvieramartin/alzheimers-prediction-neural-networks
- Imported into Mongual database
