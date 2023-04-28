package adminbd.project.projectbackend.controllers;

import adminbd.project.projectbackend.model.User;
import adminbd.project.projectbackend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
@Autowired
  UserService userService;

@GetMapping
public List<User> getAll(){
  return this.userService.getAll();
}
  @PostMapping("/signup")
  public int signUp(@RequestBody User user) {
   return this.userService.signUp(user);
  }
  @PostMapping("/signin")
  public  int signIn(@RequestPart("email") String email, @RequestPart("pass") String password) {
   return this.userService.signIn(email,password);
  }
  @DeleteMapping(path = "/{email}")
  public void deleteProfile(@PathVariable(name = "email") String email){
  this.userService.delete(email);
  }
}
