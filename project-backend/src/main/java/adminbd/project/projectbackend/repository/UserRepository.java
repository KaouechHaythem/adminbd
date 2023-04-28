package adminbd.project.projectbackend.repository;

import adminbd.project.projectbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {
}
