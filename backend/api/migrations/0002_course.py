# Generated by Django 4.2.11 on 2024-12-08 05:05

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Course",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("degree_type", models.CharField(max_length=100)),
                ("name", models.CharField(max_length=200)),
                ("slug", models.SlugField(unique=True)),
                ("title_1", models.CharField(max_length=255)),
                ("title_2", models.CharField(max_length=255)),
                ("description_1", models.TextField()),
                ("description_2", models.TextField()),
                ("career_opportunities", models.JSONField()),
                ("study_mode", models.CharField(max_length=100)),
                ("credits", models.IntegerField()),
                ("duration", models.CharField(max_length=100)),
                ("recognized_by", models.CharField(max_length=200)),
                ("degree_awarded", models.CharField(max_length=200)),
                ("language_proficiency", models.CharField(max_length=100)),
                (
                    "banner_image",
                    models.ImageField(blank=True, null=True, upload_to="banners/"),
                ),
                ("course_modules", models.JSONField()),
            ],
        ),
    ]
