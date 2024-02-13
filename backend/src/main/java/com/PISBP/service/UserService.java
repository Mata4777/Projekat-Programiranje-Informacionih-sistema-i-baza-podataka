package com.PISBP.service;

import com.PISBP.dao.NewUser.NewUser;
import com.PISBP.dao.UserData;
import com.PISBP.entity.Rubrika;
import com.PISBP.entity.User;
import com.PISBP.repository.RubrikaRepository;
import com.PISBP.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final RubrikaRepository rubrikaRepository;

    public UserService(UserRepository userRepository, RubrikaRepository rubrikaRepository) {
        this.userRepository = userRepository;
        this.rubrikaRepository = rubrikaRepository;
    }

    public User getUser(String username){
        Optional<User> oUser= userRepository.findByUserName(username);
        return oUser.get();
    }

    public List<UserData> getAll() {
        return userRepository.findAll().stream().map(UserData::new).toList();
    }

    public void addUser(NewUser user) {
        User newUser= new User();
        newUser.setUserName(user.getUsername());
        newUser.setPassword(user.getPassword());
        newUser.setActive(true);
        newUser.setRoles(user.getRole());
        List<String> rubrike = List.of(user.getRubrike().split(", "));
        for(String rubrika:rubrike){
            Optional<Rubrika> rubrika1 = rubrikaRepository.findByNaziv(rubrika);
            if (rubrika1.isPresent()) {
                newUser.getRubrike().add(rubrika1.get());
            }
        }
        userRepository.save(newUser);
    }
}
