# // strings and stuff
#
# puts "Moi, mikäs sun etunimi on?"
# name = gets.chomp
# puts "Ja toinen nimi?"
# second_name = gets.chomp
# puts "Ja sukunimenne?"
# last_name = gets.chomp
# puts "Nimesi on " + name + " " + second_name + " " + last_name + "? Hienoa!"
# puts "Mukava tavata, " + name + ". :)"
#
# puts "Entä mikä on lempinumeronne?"
# favorite_number = gets.chomp
# new_favorite_number = favorite_number.to_i + 1
# puts "Vai että " + favorite_number + "? Oletko miettinyt numeroa " + new_favorite_number.to_s + ", sehän on paljon isompi ja parempi!"
#
# puts "What is your first name?"
# first_name = gets.chomp
# puts "and your lastname?"
# last_name = gets.chomp
# count = first_name.length + last_name.length
# puts "Did you know there are " + count.to_s + " characters in your name, " + first_name + " " + last_name + "?"

# puts "WHAT DO YOU WANT?"
# want = gets.chomp
# puts "WHADDAYA MEAN " + "\"" + want.upcase + "\"?!? YOU'RE FIRED!"

# line_width = 100
# puts("Old Mother Hubbard".center(line_width))
# puts("Sat in her cupboard".center(line_width))
# puts("Eating her curds an whey,".center(line_width))
# puts("When along came a spider".center(line_width))
# puts("Which sat down beside her".center(line_width))
# puts("And scared her poor shoe dog away.".center(line_width))

# line_width = 70
# heading = "Table of Contents"
# chap1 = "Chapter 1: Numbers"
# chap2 = "Chapter 2: Letters"
# chap3 = "Chapter 3: Variables"
# chap1_page = "page 1"
# chap2_page = "page 72"
# chap3_page = "page 118"
#
# puts heading.center line_width
# puts ""
# puts chap1.ljust(line_width/2) + chap1_page.rjust(line_width/2)
# puts chap2.ljust(line_width/2) + chap2_page.rjust(line_width/2)
# puts chap3.ljust(line_width/2) + chap3_page.rjust(line_width/2)


# // Control flow

# puts "Hello, and welcome to 7th grade English."
# puts "My name is Mrs. Gabbard. And your name is...?"
# name = gets.chomp
#
# if name == name.capitalize
#   puts "Please take a seat, " + name + "."
# else
#   puts name + "? You mean " + name.capitalize + ", right?"
#   puts "Don\'t you even know how to spell your name??"
#   reply = gets.chomp
#
#   if reply.downcase == "yes"
#     puts "Hompph! Well, sit down!"
#   else puts "GET OUT!!"
#   end
# end
# command = ""
# while command != "bye" do
#   if command == ""
#     command = gets.chomp
#   end
#   puts command
#   command = gets.chomp
# end

# puts "Hello, what\'s your name?"
# name = gets.chomp
# puts "Hello, " + name + "."
# if (name == "Marko" ||name == "Julia")
#   puts "What a lovely name!"
# end


# // Deaf Grandma

say = ""
puts "Say something to Grandma"

while say != "BYE" do
	say = gets.chomp
	if say != say.upcase 
		puts "HUH?! SPEAK UP SONNY!"
		elsif say == say.upcase
			puts "NOT SINCE 1938!"
	end
end