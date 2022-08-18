Generalizations
Congratulations! You build a movie website that lets people browse a movie’s cast and an actor’s filmography. What can we generalize so far?

Actors and movies can be modeled using a many-to-many relationship. In Rails, this can be implemented using a has_many :through association.
The has_many :through association joins two models via a third model.
