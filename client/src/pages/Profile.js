import React from "react";
import "../css/Profile.css";
function Profile() {
  const name = "Yazan Hammad";
  const hasImage = false;

	const initials = name.split(' ').map(name => name[0]).join('');

  return (
    <div class="profile">
      <div className="container">
        {hasImage ? (
          <img src="user-image.jpg" alt="User Image" class="user-image" />
        ) : (
          <div className="image-alternative">{initials}</div>
        )}
        <h2 class="user-name">{name}</h2>
        <h3 class="user-role">Admin</h3>
        <p class="user-email">1932944@std.hu.edu.jo</p>
        <p class="user-brief">
          يزن شوقي خالد حماد
					طالب علم حاسوب الجامعة الهاشمية
        </p>
      </div>
    </div>
  );
}

export default Profile;
