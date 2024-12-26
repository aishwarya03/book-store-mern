import React, { useState, useEffect } from 'react'
import BookCard from "../books/BookCard.jsx"
const categories = ["Choose a genre", "Business", "Adventure", "Fiction", "Horror"]

const TopSellers = () => {
  const [books,setBooks] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("Choose a genre")

  useEffect(()=> {
    fetch("/data/books.json").then(res => res.json()).then((data)=> setBooks(data))
  }, [])

  console.log(books,"books")
  const filteredBooks = selectedCategory === "Choose a genre" ? books: books.filter(book => 
    book.category === selectedCategory.toLocaleLowerCase())
  console.log(filteredBooks,"Filterted Books")
  return (
    <div className='py-10'> <h2 className='text-3xl font-semibold mb-6'>Top Sellers</h2>
    {/* Category Filtering */}
    <div className='mb-8 flex items-center'>
      <select id="category" name="category" onChange={(e) => setSelectedCategory(e.target.value)}
      className='border bg-[#EAEAEA] border-gray-300 rounded-md px-4 focus:out'>
        {
          categories.map((category,index) => (
            <option key={index} value={category}>{category}</option>
          ))
        }
      </select>
    </div>
      <ul>
        {filteredBooks.map((book,index) => (
          
          <BookCard key={index} book={book} />

        ))}
      </ul>

    </div>
  )
}

export default TopSellers