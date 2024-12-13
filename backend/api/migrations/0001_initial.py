# Generated by Django 4.2.11 on 2024-12-08 04:20

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="ComponentData",
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
                ("name", models.CharField(max_length=255, unique=True)),
                ("data", models.JSONField()),
                ("updated_at", models.DateTimeField(auto_now=True)),
            ],
        ),
    ]