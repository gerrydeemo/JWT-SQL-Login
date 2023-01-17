For this project I decided to use a react for the fronted and express for the backend the db is sql it was my first time using sql and whilst it wasnt hard to learn it felt clunky but i know i will soon learn to love it in the backend. I also used webstorm but will not continue using this as ideavim is not working vscode for the win. 
from tkinter import *
import csv

root = Tk()
root.title("Hello World")
root.geometry("500x500")

error_message = StringVar()
def addName():
    textbox_var = textbox.get()
    with open("namefile.txt", "r") as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            for i in row:
                if i == textbox_var:
                    error_message.set("Name already exists")
                    print("Name already exists")
                    return
    with open("namefile.txt", "a") as csvfile:
        error_message.set("Name added")
        writer = csv.writer(csvfile)
        writer.writerow([textbox_var])


namelabel = Label(root, text="Please enter your name")
namelabel.pack()

textbox = Entry(root)
textbox.pack()

btn = Button(root, text="Enter", command=addName)
btn.pack()



showerror = Entry(root, text=error_message)
showerror.pack()

root.mainloop()
