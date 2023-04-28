package adminbd.project.projectbackend.services;

import adminbd.project.projectbackend.model.User;
import adminbd.project.projectbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
  @Autowired
  UserRepository userRepository;

public List<User> getAll(){
  return this.userRepository.findAll();
}
  public int signUp(User user) {
    if (userRepository.existsById(user.getEmail())) return 1;
    else {
      userRepository.save(user);
      return 0;
    }
  }


  public int signIn(String email, String password) {
      User getUser = userRepository.findById(email).orElse(null);
      if(getUser==null)return 2;

      else {if(getUser.getPassword().trim().equals(password.trim())){return 0;}
      else{return 1;}}
  }
  public void delete(String email){
    this.userRepository.deleteById(email);
  }
}
