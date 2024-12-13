from django.db import models

# Create your models here.

class ComponentData(models.Model):
    name = models.CharField(max_length=255, unique=True)  # Component identifier
    data = models.JSONField()  # Use the built-in JSONField
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
    
from django.db import models

class Course(models.Model):
    degree_type = models.CharField(max_length=100)  # New field for degree type
    name = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    title_1 = models.CharField(max_length=255)
    description_1 = models.TextField()
    image_1 =  models.ImageField( null=True, blank=True)
    title_2 = models.CharField(max_length=255)
    description_2 = models.TextField()
    image_2 = models.ImageField( null=True, blank=True)
    career_opportunities = models.JSONField()
    study_mode = models.CharField(max_length=100)
    credits = models.IntegerField()
    duration = models.CharField(max_length=100)
    recognized_by = models.CharField(max_length=200)
    awarded_by = models.CharField(max_length=200)
    language_proficiency = models.CharField(max_length=100)
    banner_image = models.ImageField( null=True, blank=True)
    
    # Storing course modules as a JSON field
    course_modules = models.JSONField()  # Store modules as JSON data

    def __str__(self):
        return self.name
