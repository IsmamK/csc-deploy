from django.urls import path,include
from .views import *

# Initialize the router

urlpatterns = [
    path('layout/navbar/', NavbarView.as_view(), name='navbar'),
    path('layout/footer/', FooterView.as_view(), name='footer'),

    path('partner-carousel/', PartnerCarouselView.as_view(), name='partner-carousel'),

    path('home/carousel/', CarouselView.as_view(), name='carousel'),
    path('home/hero/', HeroView.as_view(), name='hero'),
    path('home/cards/', CardsView.as_view(), name='cards'),
    path('home/services/', ServicesView.as_view(), name='services'),
    path('home/statistics/', StatisticsView.as_view(), name='statistics'),
    path('home/grid-cards/', GridCardsView.as_view(), name='grid_cards'),
    path('home/why-us/', WhyUsView.as_view(), name='why_us'),
    path('home/our-clients/', OurClientsView.as_view(), name='our_clients'),
    path('home/news/', NewsView.as_view(), name='news'),
    path('home/contact/', ContactView.as_view(), name='contact'),
    path('home/location/', LocationView.as_view(), name='location'),
    path('home/featured-video/', FeaturedVideoView.as_view(), name='featured_video'),

    # About Section
    path('about/about1/', About1View.as_view(), name='about1'),
    path('about/about2/', About2View.as_view(), name='about2'),
    path('about/faq/', FaqView.as_view(), name='faq'),
    path('about/team/', TeamView.as_view(), name='team'),

    # Contact Section
    path('contact/contact1/', Contact1View.as_view(), name='contact1'),
    path('contact/contact2/', Contact2View.as_view(), name='contact2'),

    # Projects Section
    path('projects/', ProjectsView.as_view(), name='projects'),
    path('b2b/', B2BView.as_view(), name='b2b'),


      # Projects Section
    path('services/', ServicesPageView.as_view(), name='services-pages'),


 # Projects Section
    path('gallery/', GalleryView.as_view(), name='gallery'),
    path('video-gallery/', VideoGalleryView.as_view(), name='video-gallery'),


    path('get-service-slugs/', get_service_slugs, name='get_service_slugs'),

    path('courses/', CourseListCreateView.as_view(), name='course-list-create'),
    path('courses/<int:pk>/', CourseRetrieveUpdateDestroyView.as_view(), name='course-detail'),
    
    ]