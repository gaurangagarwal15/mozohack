## cURL for backend

### Finding Patient by Name

```
curl --location --request GET 'http://localhost:5000/api/patient/find?q={name}'
```

### Finding Doctor by Name

```
curl --location --request GET 'http://localhost:5000/api/doctor/find?q={name}'
```

### Adding a new Doctor

```
curl --location --request POST 'http://localhost:5000/api/doctor/new' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'Cookie: ARRAffinity=59ed4a69001d7adf38f26ae63c4e590c47dbb2ac549c856f50127e235fd98cf4; ARRAffinitySameSite=59ed4a69001d7adf38f26ae63c4e590c47dbb2ac549c856f50127e235fd98cf4' \
--data-urlencode 'name=Dr. Saumya Gupta
' \
--data-urlencode 'degree=MBBS' \
--data-urlencode 'specialization=Dentist' \
--data-urlencode 'address=D57/51B, Siddhgiri Bagh, Varanasi 201001' \
--data-urlencode 'registrationNumber=02916'
```

### Adding a new Patient

```
curl --location --request POST 'http://localhost:5000/api/patient/new' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'Cookie: ARRAffinity=59ed4a69001d7adf38f26ae63c4e590c47dbb2ac549c856f50127e235fd98cf4; ARRAffinitySameSite=59ed4a69001d7adf38f26ae63c4e590c47dbb2ac549c856f50127e235fd98cf4' \
--data-urlencode 'name=Sahil Kumar Jena' \
--data-urlencode 'age=21' \
--data-urlencode 'symtoms=complain of fever' \
--data-urlencode 'gender=Male' \
--data-urlencode 'address=chennai' \
--data-urlencode 'phoneNumber=8787064557'
```

### Patient Prescription Information

```
curl --location 'http://localhost:5000/api/data/new' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'Cookie: ARRAffinity=59ed4a69001d7adf38f26ae63c4e590c47dbb2ac549c856f50127e235fd98cf4; ARRAffinitySameSite=59ed4a69001d7adf38f26ae63c4e590c47dbb2ac549c856f50127e235fd98cf4' \
--data-urlencode 'Doctor_Name= Dr. Anant Gupta' \
--data-urlencode 'Doctor_Degree= MBBS' \
--data-urlencode 'Doctor_Specialization= Senior Dentist' \
--data-urlencode 'Doctor_RegistrationNumber= 02916' \
--data-urlencode 'Doctor_Address= D57/51B, Siddhgiri Bagh, Varanasi 201001' \
--data-urlencode 'Patient_Name=Sahil Kumar Jena' \
--data-urlencode 'Patient_Age= 20' \
--data-urlencode 'Patient_Sex= Male' \
--data-urlencode 'Patient_Address= chennai' \
--data-urlencode 'Patient_MobileNumber= 8787064557' \
--data-urlencode 'Symptoms= complain of headache' \
--data-urlencode 'Diagnosis= ' \
--data-urlencode 'ReferenceNumber= ' \
--data-urlencode 'Duration= ' \
--data-urlencode 'TabletName= Excedrin PM Triple Action Caplets and Excedrin Extra Strength Pain Reliever Kit' \
--data-urlencode 'DrugName= ' \
--data-urlencode 'date= 02/24/2023' \
--data-urlencode 'Time= 23:41:07'
```

### Patient Prescription

```
curl --location 'http://localhost:5000/api/data/patient/63f904b4e9e0e9b6e3ef1dda'
```
