USE tasty_bites_restaurant;

-- Insert Categories
INSERT INTO categories (name, description) VALUES
('starters', 'Appetizers and small dishes to start your meal'),
('mains', 'Main courses and entrees'),
('desserts', 'Sweet treats to end your meal'),
('drinks', 'Beverages and cocktails'),
('sides', 'Side dishes and accompaniments');

-- Insert Menu Items (matching your React app)
INSERT INTO menu_items (name, description, price, category_id, image_url) VALUES
('Classic Cheeseburger', 'Juicy beef patty with melted cheese, fresh lettuce, tomato, and our special sauce', 12.99, 2, 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'),
('Margherita Pizza', 'Thin crust pizza with fresh tomatoes, mozzarella, and basil leaves', 14.99, 2, 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'),
('Caesar Salad', 'Crisp romaine lettuce with parmesan, croutons, and our homemade Caesar dressing', 9.99, 1, 'https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'),
('Chocolate Lava Cake', 'Warm chocolate cake with a molten center, served with vanilla ice cream', 7.99, 3, 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'),
('Garlic Bread', 'Freshly baked bread with garlic butter and herbs', 4.99, 5, 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'),
('French Fries', 'Crispy golden fries with sea salt', 3.99, 5, 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80');

-- Insert Sample Users (with placeholder passwords)
INSERT INTO users (name, email, phone) VALUES
('John Doe', 'john.doe@email.com', '+96170123456'),
('Jane Smith', 'jane.smith@email.com', '+96170987654'),
('Mike Johnson', 'mike.johnson@email.com', '+96170555123');

-- Insert Sample Reservations
INSERT INTO reservations (user_id, reservation_date, reservation_time, party_size, customer_name, customer_email, customer_phone, special_requests, status, reservation_code) VALUES
(1, '2024-01-15', '18:30:00', 2, 'John Doe', 'john.doe@email.com', '+96170123456', 'Window seat preferred', 'confirmed', 'TB-1001'),
(2, '2024-01-15', '19:00:00', 4, 'Jane Smith', 'jane.smith@email.com', '+96170987654', 'Celebrating birthday', 'confirmed', 'TB-1002'),
(NULL, '2024-01-16', '20:00:00', 6, 'Robert Brown', 'robert.b@email.com', '+96170888555', 'Vegetarian options needed', 'pending', 'TB-1003');

-- Insert Contact Messages
INSERT INTO contact_messages (name, email, subject, message, status) VALUES
('Sarah Wilson', 'sarah.w@email.com', 'Allergy Information', 'Do you have gluten-free options? I have celiac disease.', 'replied'),
('David Lee', 'david.lee@email.com', 'Private Events', 'Interested in booking for a corporate event of 30 people.', 'unread'),
('Maria Garcia', 'maria.g@email.com', 'Compliment', 'Amazing food and service! Will definitely come back.', 'read');