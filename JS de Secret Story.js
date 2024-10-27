document.getElementById('submit-create-account').addEventListener('click', function() {
    const username = document.getElementById('new-username').value;
    const password = document.getElementById('new-password').value;
    const email = document.getElementById('email').value;

    // Récupérer les utilisateurs existants dans le localStorage (en JSON)
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Vérifier si l'username ou l'email existe déjà
    const isUsernameTaken = users.some(user => user.username === username);
    const isEmailTaken = users.some(user => user.email === email);

    if (isUsernameTaken || isEmailTaken) {
        alert('Identifiant ou adresse-mail déjà utilisé.');
    } else if (username && password && email) {
        // Ajouter le nouvel utilisateur
        users.push({ username, password, email });
        
        // Mettre à jour le localStorage avec le nouveau compte
        localStorage.setItem('users', JSON.stringify(users));
        
        alert('Compte créé avec succès!');
        
        // Masquer le formulaire de création de compte
        document.getElementById('create-account-form').style.display = 'none';
        
        // Réafficher les boutons "Créer un compte" et "Se connecter"
        document.getElementById('create-account-btn').style.display = 'block';
        document.getElementById('login-btn').style.display = 'block';
    } else {
        alert('Veuillez remplir tous les champs.');
    }
});

document.getElementById('submit-login').addEventListener('click', function() {
    const loginUsername = document.getElementById('login-username').value;
    const loginPassword = document.getElementById('login-password').value;

    // Récupérer les utilisateurs existants
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Vérifier si l'utilisateur existe avec le bon mot de passe
    const user = users.find(user => user.username === loginUsername && user.password === loginPassword);

    if (user) {
        alert('Connexion réussie!');
        
        // Rediriger vers la section du chat
        document.getElementById('auth-container').style.display = 'none';
        document.getElementById('chat-container').style.display = 'block';
    } else {
        alert('Nom d\'utilisateur ou mot de passe incorrect.');
    }
});
