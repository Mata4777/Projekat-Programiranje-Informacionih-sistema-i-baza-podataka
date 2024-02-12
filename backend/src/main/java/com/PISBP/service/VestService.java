package com.PISBP.service;

import com.PISBP.dao.NewVest;
import com.PISBP.dao.VestBaseInfo;
import com.PISBP.entity.Rubrika;
import com.PISBP.entity.User;
import com.PISBP.entity.Vest;
import com.PISBP.repository.RubrikaRepository;
import com.PISBP.repository.UserRepository;
import com.PISBP.repository.VestReposotory;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class VestService {
    private final VestReposotory vestReposotory;
    private final UserRepository userRepository;
    private final RubrikaRepository rubrikaRepository;

    public VestService(VestReposotory vestReposotory, UserRepository userRepository, RubrikaRepository rubrikaRepository) {
        this.vestReposotory = vestReposotory;
        this.userRepository = userRepository;
        this.rubrikaRepository = rubrikaRepository;
    }

    public boolean saveVest(NewVest vest){
        Optional<Rubrika> rubrika=rubrikaRepository.findByNaziv(vest.getRubrikaName());
        Optional<User> user = userRepository.findByUserName(vest.getUsername());

        Vest novaVest=Vest.builder()
                .date(new Date())
                .naslov(vest.getNaslov())
                .text(vest.getText())
                .brojLajkova(0)
                .brojDisajkova(0)
                .tag(vest.getTag())
                .rubrika(rubrika.orElse(null))
                .novinar(user.get())
                .state("new").build();

        vestReposotory.save(novaVest);
        return true;
    }

    public List<VestBaseInfo> getAll() {
        List<Vest> vesti= vestReposotory.findAll();
        List<VestBaseInfo> res = vesti.stream().map(VestBaseInfo::new).toList();
        return res;
    }

    public List<VestBaseInfo> getTodays() {
        List<Vest> vesti= vestReposotory.findTodays();
        List<VestBaseInfo> res = vesti.stream().map(VestBaseInfo::new).toList();
        return res;
    }

    public List<VestBaseInfo> getByUserId(Integer userId) {
        List<Vest> vesti= vestReposotory.findByNovinarId(userId);
        List<VestBaseInfo> res = vesti.stream().map(VestBaseInfo::new).toList();
        return res;
    }

    public Vest getById(Integer vestId) {
        Optional<Vest> ovest=vestReposotory.findById(vestId);
        return ovest.orElse(null);
    }
}
