
    // Date de fin du compte à rebours (format : année, mois-1, jour, heures, minutes, secondes)
    const endDate = new Date(2024, 01, 24, 12, 0, 0).getTime();

    // Mettez à jour le compte à rebours chaque seconde
    const countdown = setInterval(function() {
      const now = new Date().getTime();
      const distance = endDate - now;

      // Calcul des jours, heures, minutes et secondes restantes
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Mettre à jour les cellules du tableau avec les nouvelles valeurs
      document.getElementById("days").innerHTML = days;
      document.getElementById("hours").innerHTML = hours;
      document.getElementById("minutes").innerHTML = minutes;
      document.getElementById("seconds").innerHTML = seconds;

      // Si le compte à rebours est terminé, arrêter l'intervalle
      if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
      }
    }, 1000); // Mettre à jour toutes les secondes
 