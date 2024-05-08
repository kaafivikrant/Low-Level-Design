Step #1. Actors:
Let's think wh all are the ones that will using the system. The first class of users that come to mind are the movie watchers. Let's call them customrs. They will visit the website to buy movie tickets.
Apart from buying tickets online, how else can they buy tickets ?
(1) Customers may call the customer care over the phone and make a booking.
(2) Customers may also just walk in and buy tickets from the cinema hall directly.

So, we have two more types of users who will be interacting with the system. They are:
Customer care representatives, whoc help customers make booking over the phone,
Front Desk Assistants, who issue customers tickets at the cinema halls when a customer walks in and purchase a ticket. Front Desk Assistants are also responsible to check in the customers at the movie theater.
Someone from the theater companies needs to put all the information about the new movies in the system and remove the ones which are no longer running in the theater. This is done by Theater Administrator.

Also, someone from the company which owns the system needs to onboard the client theater companies in the system. We will call this person System Administrator.

It is important to understand how system administrator is different from theater administrator. Theater Administrators employees of the theater companies which are clients of the movie ticket booking system. So Theater Administrators will be employees of companies like AMC, INOX etc. Whereas System Administartors are employees of the company that owns the Online Movie Ticket Booking System, like BookMyShow, and are responsible for onboarding clients like AMC, INOX, Regal Cinemas etc on the system.

Step #2. User Activities and Use Cases of the System:

This is where you discuss the scope of your design with your interviewer. We would be focusing on the below use cases of the system:
System should be able to list the cities where affiliate cinemas are located.
Each theater company can have multiple movie halls and each movie hall can run multiple movie shows.
Once the customer selects a movie, the service should display the cinemas running that movie and its available shows.
The customer should be able to select a show at a particular theater and book their tickets.
The service should show the customer the different seat options available, like regular seats, premium seats, ADA compliant accessible seats, recliner seats etc.
Customers should be able to pay with credit cards or cash.
The system should ensure that no two customers can reserve the same seat.
Step #3. Entities:

Theater Companies
Theater Locations (Movie Hall / Cinema Hall / Theater / Multiplex)
Movie
Movie Show (a movie can can several shows in a cinema hall at different time or may be at the same time. Example: 2D and 3D version of a movie playing at the same time in two different shows at the same location.)
Seat (a show will have seats for the movie watchers / customers.)
Booking
Payment
